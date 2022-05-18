import React, { useEffect, useState } from "react";
import { Post } from "../components/Post";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    const getPosts = () => {
        fetch("./posts.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => {
                return response.json();
            })
            .then((postsJson) => {
                const sorted = postsJson.sort((a, b) => b.id - a.id);
                setPosts(sorted);
            });
    };
    useEffect(() => {
        getPosts();
        setCurrentPage(localStorage.getItem('currentPage'));
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Header
                headerTitle="All Post"
                subHeading="This is all posted article you can read"
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`,
                }}
            />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <Post posts={currentPost} />
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;
