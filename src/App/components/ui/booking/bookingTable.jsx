import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getRoomTypeById } from '../../../store/roomTypes';
import SelectField from '../../common/form/selectField';
import { renderGuests } from '../../../utils/utils';
import parse from 'html-react-parser';
import { icons } from '../../../api/icons';

const BookingTable = ({ name, type, maxNumberOfPersons, booking, priceList }) => {
    const numberType = useSelector(getRoomTypeById(type));
    const getStatus = (bookings) => (bookings.length > 0 ? 'Забронирован' : 'Свободен');
    const priceOptions = Object.keys(priceList).reduce((arr, key) => {
        const value = key;
        const name = ` ${renderGuests(key)} ${priceList[key]}₽`;
        arr.push({ name, value });
        return arr;
    }, []);
    return (
        <>
            <tbody>
                <tr className="admin-table__row">
                    <td className="admin-table__value">{name}</td>
                    <td className="admin-table__value">{numberType.name}</td>
                    <td className="admin-table__value">{`до ${maxNumberOfPersons} человек`}</td>
                    <td className="admin-table__value">
                        <SelectField
                            options={priceOptions}
                            name={'price'}
                            defaultOption={'Выберите количество гостей'}
                        />
                    </td>
                    <td className="admin-table__value">{getStatus(booking)}</td>
                    <td className="admin-table__value edit">{parse(`${icons.edit}`)}</td>
                </tr>
            </tbody>
        </>
    );
};

BookingTable.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    maxNumberOfPersons: PropTypes.number,
    booking: PropTypes.array,
    priceList: PropTypes.object
};

export default BookingTable;
