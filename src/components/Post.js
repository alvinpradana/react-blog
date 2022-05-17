import React from "react";
import { NavLink } from "react-router-dom";

export const Post = ({ posts }) => {
    return (
        <div>
            {posts &&
                posts.length > 0 &&
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <div className="post-preview">
                                <NavLink to={`/${post.id}`}>
                                    <h2 className="post-title">{post.title}</h2>
                                    <h3 className="post-subtitle">
                                        {post.subtitle}
                                    </h3>
                                </NavLink>
                                <p className="post-meta">
                                    Posted at {post.date}
                                </p>
                            </div>
                            <hr className="my-4" />
                        </div>
                    );
                })}
        </div>
    );
};