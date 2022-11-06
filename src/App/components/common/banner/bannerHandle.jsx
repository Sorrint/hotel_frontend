import React from 'react';
const BannerHandle = ({ name, text }) => {
    return (
        <>
            <div className="banner">
                <div className={`banner${name}`}>
                    <div className="banner__filter">
                        <div className="banner__title">
                            <h1 className="banner__text">{text}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerHandle;
