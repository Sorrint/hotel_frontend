import React from 'react';
import BannerByRoute from './bannerByRoute';
import BannerHandle from './bannerHandle';
import PropTypes from 'prop-types';

const Banner = ({ imgClassName, text }) => {
    return <>{imgClassName ? <BannerHandle name={imgClassName} text={text} /> : <BannerByRoute />} </>;
};

Banner.propTypes = {
    imgClassName: PropTypes.string,
    text: PropTypes.string
};
export default Banner;
