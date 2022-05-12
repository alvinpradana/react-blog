import React from "react";

export function Button(props) {
    return (
        <div>
            <div className="d-flex justify-content-end mb-4">
                <button className="btn btn-primary text-uppercase">{props.btnTitle}</button>
            </div>
        </div>
    )
}