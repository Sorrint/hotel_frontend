import React from 'react';
import Footer from '../../common/footer';
import Header from '../../common/header';
import Banner from '../../common/banner/banner';
import Calendar from '../../common/calendar';
import { useState } from 'react';

const MainPage = () => {
    const [view, setView] = useState(false);
    const toggleCalendar = () => {
        setView((prevState) => !prevState);
    };
    return (
        <>
            <Header />
            <div className="wrapper">
                <Banner />
                {/* <div className="form">
                    <div className="form__date">
                        <Calendar view={view} />
                    </div>
                </div> */}
                <div className="content"></div>
            </div>

            <Footer />
        </>
    );
};

export default MainPage;
