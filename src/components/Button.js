import React from "react";

export function Button(props) {
    return (
        <div>
            <div class="d-flex justify-content-end mb-4">
                <button class="btn btn-primary text-uppercase">{props.btnTitle}</button>
            </div>
        </div>
    )
}