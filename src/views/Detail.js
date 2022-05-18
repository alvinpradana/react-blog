import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Detail() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const getPost = () => {
        fetch("./posts.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (postJson) {
                postJson.map((post) => {
                    if (post.id === parseInt(id)) {
                        setPost(post);
                    }
                    return post;
                });
            });
    };
    useEffect(() => {
        getPost();
    }, []);
    return (
        <>
            <Header
                headerTitle="Detail Post"
                subHeading="Simple and minimalist portal blog with React"
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`,
                }}
            />
            <article>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div key={post.id}>
                                <h1 className="text-center">{post.title}</h1>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Detail;
