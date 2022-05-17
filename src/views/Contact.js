import React from "react";
import { Button } from "../components/Button";
import Header from "../components/Header";

function Contact() {
    return (
        <div>
            <Header
                headerTitle="Contact Page"
                subHeading="You can contact us with this information"
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`,
                }}
            />
            <h1 className="text-center mb-5">Contact Us</h1>
            <div className="row justify-content-center">
                <div className="col-md-4 px-4">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="name"
                            name="name"
                            id="name"
                            className="form-control is-invalid"
                        />
                        <small className="invalid-feedback">Field name can't empty.</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control is-invalid"
                        />
                        <small className="invalid-feedback">Your email must be valid.</small>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="message" className="form-label">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            type="message"
                            name="message"
                            id="message"
                            className="form-control is-invalid"
                        />
                        <small className="invalid-feedback">Field message can't empty.</small>
                    </div>
                    <Button btnTitle="Send" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
