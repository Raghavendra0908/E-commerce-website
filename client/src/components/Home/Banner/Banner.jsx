import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner_img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Avail best offers and discount on your favourite
                        Headphones, Earbuds, Bluetooth Speakers during 
                        Super Saving Days.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner_img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
