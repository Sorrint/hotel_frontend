import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBannerByLocation } from '../../../store/banner';

const BannerByRoute = () => {
    const location = useLocation();
    const banner = useSelector(getBannerByLocation(location));

    return (
        <>
            {banner &&
                (banner.className === '_main' ? (
                    <div className="slider">
                        <div className="image"></div>
                    </div>
                ) : (
                    <div className="banner">
                        <div className={`banner${banner.className}`}>
                            <div className="banner__filter">
                                <div className="banner__title">
                                    <h1 className="banner__text">{banner.name}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default BannerByRoute;
