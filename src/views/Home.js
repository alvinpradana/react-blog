import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Header from "../components/Header";

function Home() {
    return (
        <div>

            <Header />

            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <Card
                            postLinkDetail="/view-1"
                            postTitle="Man must explore, and this is exploration at its greatest"
                            postSubtitle="Problems look mighty small from 150 miles up"
                            postDate="September 24, 2022"
                        />
                        <Card
                            postLinkDetail="/view-1"
                            postTitle="Man must explore, and this is exploration at its greatest"
                            postSubtitle="Problems look mighty small from 150 miles up"
                            postDate="September 24, 2022"
                        />

                        <NavLink to="/post">
                            <Button btnTitle="All Posts →" />
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
