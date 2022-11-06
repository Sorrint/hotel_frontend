import React from 'react';
import BannerByRoute from './bannerByRoute';
import BannerHandle from './bannerHandle';

const Banner = ({ imgClassName, text }) => {
    return <>{imgClassName ? <BannerHandle name={imgClassName} text={text} /> : <BannerByRoute />} </>;
};

export default Banner;
