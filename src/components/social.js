import React from "react";

function Social() {
    return (
        <div className="row justify-content-md-center">
            <h4 className="text-center">Get in Touch!</h4>
            <div className="col-md-auto">
                <a href = "mailto: daniel.eager19@outlook.com">
                    <img className="social-svgs" src="./assets/svgs/social/email.svg" alt="Email icon" />
                </a>
            </div>
            <div className="col-md-auto">
                <a href="https://github.com/DanEager19">
                    <img className="social-svgs" src="./assets/svgs/social/github.svg" alt="GitHub icon" />
                </a>
            </div>
            <div className="col-md-auto">
                <a href="https://www.linkedin.com/in/dan-eager/">
                    <img className="social-svgs" src="./assets/svgs/social/linkedin.svg" alt="LinkedIn icon" />
                </a>
            </div>
            <div className="col-md-auto">
                <a href="https://twitter.com/ZionNyah">
                    <img className="social-svgs" src="./assets/svgs/social/twitter.svg" alt="Twitter icon" />
                </a>
            </div>
        </div>
    );
}

export default Social;