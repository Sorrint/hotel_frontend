import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import usePaginate from '../../../hooks/usePaginate';
import { getReviews, getReviewsLoadingStatus, removeReview } from '../../../store/review';
import Footer from '../../common/footer';
import Header from '../../common/header/header';
import Pagination from '../../common/pagination';
import Loader from '../../common/portal/loader';
import ReviewsList from '../../common/reviews/reviewsList';
const ReviewsPage = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(getReviews());
    const reviewsLoadingStatus = useSelector(getReviewsLoadingStatus());

    const [displayReviews, setDisplayReviews] = useState([]);
    useEffect(() => {
        setDisplayReviews(reviews);
    }, [reviews]);

    const count = displayReviews.length;
    const { itemsCrop, currentPage, currentPageSize, setCurrentPage } = usePaginate(displayReviews, 5 || []);
    const handleRemove = (id) => {
        dispatch(removeReview(id));
    };

    if (reviewsLoadingStatus) {
        return <Loader />;
    }
    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="content reviews-content">
                    <ReviewsList reviews={itemsCrop} onRemove={handleRemove} />
                    <div className="pagination__container">
                        <Pagination
                            itemCount={count}
                            pageSize={currentPageSize}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ReviewsPage;
