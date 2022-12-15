import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const RoomCard = ({ options, data, wrapperName }) => {
    const renderContent = ({ option, data, key }) => {
        if (option.component && typeof option.component === 'function') {
            const component = option.component;
            const value = option.path ? data[option.path] : { ...data };
            return component({ value, wrapperName, wrapperSubName: option.subName, key });
        }
        return _.get(data, option.path);
    };

    return (
        <div className={wrapperName}>
            {Object.keys(options).map((option) =>
                renderContent({ option: options[option], data, key: `${option}${data._id}` })
            )}
        </div>
    );
};

RoomCard.propTypes = {
    options: PropTypes.object,
    wrapperName: PropTypes.string,
    data: PropTypes.object
};
export default RoomCard;
