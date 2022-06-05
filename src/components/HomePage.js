import React from "react";
import HeaderBar from './HeaderBar'
import HomeLinkButton from "./HomeLinkButton";
import resume from "../img/ThomasHeinrichsResume.pdf";

export default () => {
    return (
        <div className="sectionContainer homepagePage">
            <HeaderBar />
            <h2 className="andText">&</h2>
            <div className="homepageGalleries">
                {/* <div className="stripeElement"></div> */}
                <HomeLinkButton buttonType="artButton" title="ART" subTitle="(COMING SOON)" imageGallery="art" />
                <HomeLinkButton buttonType="designButton" title="DESIGN" imageGallery="design" />
            </div>
            <div className="homepageBar"></div>
        </div>
    );
};
