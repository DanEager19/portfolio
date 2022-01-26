import React from "react";

function Social() {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-auto">
                <a href = "mailto: daniel.eager19@outlook.com">
                    <img className="svgs" src="./svgs/email.svg" alt="Email icon" />
                </a>
            </div>
            <div className="col-md-auto">
                <a href="https://github.com/DanEager19">
                    <img className="svgs" src="./svgs/github.svg" alt="GitHub icon" />
                </a>
            </div>
            <div className="col-md-auto">
                <a href="https://www.linkedin.com/in/dan-eager/">
                    <img className="svgs" src="./svgs/linkedin.svg" alt="LinkedIn icon" />
                </a>
            </div>
            <div className="col-md-auto">
                <a href="https://twitter.com/ZionNyah">
                    <img className="svgs" src="./svgs/twitter.svg" alt="Twitter icon" />
                </a>
            </div>
        </div>
    );
}

export default Social;