import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import Header from "../components/Header";

function Post(props) {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("./posts.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (dataJson) {
                const sorted = dataJson.sort((a, b) => b.id - a.id)
                setData(sorted);
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Header
                headerTitle="All Post"
                subHeading="This is all posted article you can read"
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`
                }}
            />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {data &&
                            data.length > 0 &&
                            data.map((post) => {
                                return (
                                    <Card
                                    key={post.id}
                                        postLinkDetail={`/${post.id}`}
                                        postTitle={post.title}
                                        postSubtitle={post.subtitle}
                                        postDate={post.date}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
