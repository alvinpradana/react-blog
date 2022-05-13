import React from "react";
import { NavLink } from "react-router-dom";

export function Card(props) {
  return (
    <div>
      <div class="post-preview">
        <NavLink to={props.postLinkDetail}>
            <h2 class="post-title">
                {props.postTitle}
            </h2>
            <h3 class="post-subtitle">
                {props.postSubtitle}
            </h3>
        </NavLink>
        <p class="post-meta">
            Posted at {props.postDate}
        </p>
      </div>

      <hr class="my-4" />
    </div>
  );
}
