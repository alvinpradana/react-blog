import React from "react";
import { NavLink } from "react-router-dom";

export function Card(props) {
    return (
        <div>
            <div className="post-preview">
                <NavLink to={props.postLinkDetail}>
                    <h2 className="post-title">{props.postTitle}</h2>
                    <h3 className="post-subtitle">{props.postSubtitle}</h3>
                </NavLink>
                <p className="post-meta">Posted at {props.postDate}</p>
            </div>
            <hr className="my-4" />
        </div>
    );
}
