import React from 'react';
import Footer from '../../common/footer';
import Header from '../../common/header';
import Banner from '../../common/banner/banner';
import Calendar from '../../common/calendar';

const MainPage = () => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Banner />
                <div className="form">
                    <div className="form__date">
                        <Calendar />
                    </div>
                </div>
                <div className="content"></div>
            </div>

            <Footer />
        </>
    );
};

export default MainPage;
