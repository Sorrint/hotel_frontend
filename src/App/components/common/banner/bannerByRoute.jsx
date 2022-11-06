import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import bannerService from '../../../services/banners.service';

const BannerByRoute = () => {
    const location = useLocation();
    const [banner, setBanner] = useState(
        bannerService.fetchAll().then((data) => {
            data.find((banner) => banner.path === location.pathname);
        })
    );

    useEffect(() => {
        bannerService.fetchAll().then((data) => {
            setBanner(data.find((banner) => banner.path === location.pathname));
        });
    }, [location]);
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
