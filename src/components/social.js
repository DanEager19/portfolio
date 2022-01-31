import React from "react";

function Social() {
    return (
        <div className="row justify-content-center text-center">
            <h2 className="text-center">Where I'm At</h2>
            <div className="col-md-1">
                <div className="social-svg-box">
                    <div className="row">
                        <a href = "mailto: daniel.eager19@outlook.com">
                            <img className="social-svgs" src="./assets/svgs/social/email.svg" alt="Email icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-1">
                <div className="social-svg-box">
                    <div className="row">
                        <a href="https://github.com/DanEager19">
                            <img className="social-svgs" src="./assets/svgs/social/github.svg" alt="GitHub icon" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-md-1">
                <div className="social-svg-box">
                    <div className="row">
                        <a href="https://www.linkedin.com/in/dan-eager/">
                            <img className="social-svgs" src="./assets/svgs/social/linkedin.svg" alt="LinkedIn icon" />
                        </a>
                    </div>
                </div> 
            </div>
            <div className="col-md-1">
                <div className="social-svg-box">
                    <div className="row">
                        <a href="https://twitter.com/ZionNyah">
                            <img className="social-svgs" src="./assets/svgs/social/twitter.svg" alt="Twitter icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Social;