import React from 'react';
import PropTypes from 'prop-types';
const Modal = ({ active, setActive, children }) => {
    return (
        <div className={`modal__wrapper${active ? ' show' : ''}`} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
export default Modal;
