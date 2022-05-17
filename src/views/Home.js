import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";
import { Post } from "../components/Post";
import Header from "../components/Header";

function Home() {
    const [posts, setPosts] = useState([]);
    const [currentPage] = useState(1);
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
                const fetch = postsJson.sort((a, b) => b.id - a.id);
                setPosts(fetch);
            });
    };
    useEffect(() => {
        getPosts();
    }, []);

    // get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div>
            <Header
                headerTitle="Welcome"
                subHeading="Simple and minimalist portal blog with React"
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`,
                }}
            />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <Post posts={currentPost} />
                        <NavLink to="/post">
                            <Button btnType="button" btnTitle="All Posts →" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
