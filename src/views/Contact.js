import React from "react";
import Header from "../components/Header";

function Contact(props) {
    return (
        <div>
            <Header
                headerTitle="Contact Page"
                subHeading="You can contact us with this information"
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`,
                }}
            />
            <h1 className="text-center mb-5">Contact Page</h1>
        </div>
    );
}

export default Contact;
