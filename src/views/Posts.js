import React from "react";
import Header from "../components/Header";

function Posts(props) {
    return (
        <div>
            <Header
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`,
                }}
            />
            <h1 className="text-center mb-5">All post page</h1>
        </div>
    );
}

export default Posts;
