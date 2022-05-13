import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function Detail(props) {
    const { id } = useParams();
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
                dataJson.map((post) => {
                    if (post.id == id) {
                        setData(post);
                    }
                });
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
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
                            <div key={data.id}>
                                <h1 className="text-center">{data.title}</h1>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Detail;
