import React from "react";

export function Button(props) {
    return (
        <div>
            <div className="d-flex justify-content-end mb-4">
                <button type={props.btnType} className="btn btn-primary text-uppercase">{props.btnTitle}</button>
            </div>
        </div>
    )
}