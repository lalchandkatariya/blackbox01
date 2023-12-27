import React from 'react'
import "../HomeIntroFooter/AutoComVideo.css"
import { YtVideo } from './YtVideo'
export const AutoComVideo = () => {
    return (
        <div style={{ background: "black" }}>
            <div className="feature-name">
                <h2 className="h2-new">What is Autocomplete?</h2>
                <div className="div-block-131-copy">
                    <div className="h7 _64ch">
                        BLACKBOX Code Autocomplete is a tool that helps developers save time by
                        providing suggestions for code snippets that they can use in their
                        projects. It does this by analyzing the code being written and suggesting
                        relevant code snippets that can be used. Overall, BLACKBOX Code
                        Autocomplete is a valuable tool that helps developers save time and
                        improve code quality.
                    </div>
                </div>
            </div>

            <div style={{ width: "100%", height: "100%" }}>
                <YtVideo />
            </div>

            <div className="section-linear">
                <div className="div-block-1324-copy">
                    <div className="text-block-35">Elevate your coding skills</div>
                    <div className="h6">
                        Get started with Blackbox to begin your journey and become <br />a
                        coding-pro in days!
                    </div>
                    <div className="div-block-189">
                        <a href="/auth/google" className="button-primary-2 w-inline-block">
                            <div className="text-block-41">Get started Now!</div>
                            <img
                                src="https://www.useblackbox.io/style/images/chevron-right.svg"
                                loading="lazy"
                                alt=""
                                className="icon-16"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
