import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import Header from "../components/Header";

function Contact(props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onBlur",
    });
    const onSubmit = (data) => {
        reset()
    };

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Enter your name"
                                className={`form-control ${
                                    errors.name ? "is-invalid" : ""
                                }`}
                                {...register("name", { required: true })}
                            />
                            {errors.name && (
                                <small className="invalid-feedback">
                                    Field name can't empty.
                                </small>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                autoComplete="off"
                                placeholder="Enter your email"
                                className={`form-control ${
                                    errors.email ? "is-invalid" : ""
                                }`}
                                {...register("email", {
                                    required: true,
                                    pattern:
                                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                })}
                            />
                            <small className="invalid-feedback">
                                Your email must be valid.
                            </small>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="message" className="form-label">
                                Message
                            </label>
                            <textarea
                                rows={4}
                                type="text"
                                autoComplete="off"
                                placeholder="Type your message here"
                                className={`form-control ${
                                    errors.message ? "is-invalid" : ""
                                }`}
                                {...register("message", { required: true })}
                            />
                            <small className="invalid-feedback">
                                Field message can't empty.
                            </small>
                        </div>
                        <Button btnType="submit" btnTitle="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
