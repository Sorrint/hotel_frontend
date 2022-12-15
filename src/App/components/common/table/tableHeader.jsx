import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ columns, tableName }) => {
    return (
        <thead className={`${tableName}__header`}>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th className={`${tableName}__title`} key={columns[column].name}>
                        {columns[column].name}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    columns: PropTypes.object,
    tableName: PropTypes.string
};
export default TableHeader;
