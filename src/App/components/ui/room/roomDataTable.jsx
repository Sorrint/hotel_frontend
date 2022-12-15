import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getRoomTypeById } from '../../../store/roomTypes';
import SelectField from '../../common/form/selectField';
import { renderGuests } from '../../../utils/utils';
import parse from 'html-react-parser';
import { icons } from '../../../api/icons';

const RoomDataTable = ({ name, type, maxNumberOfPersons, booking, priceList }) => {
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
                <tr className="roomData-table__row">
                    <td className="roomData-table__value">{name}</td>
                    <td className="roomData-table__value">{numberType.name}</td>
                    <td className="roomData-table__value">{`до ${maxNumberOfPersons} человек`}</td>
                    <td className="roomData-table__value">
                        <SelectField
                            options={priceOptions}
                            name={'price'}
                            defaultOption={'Выберите количество гостей'}
                        />
                    </td>
                    <td className="roomData-table__value">{getStatus(booking)}</td>
                    <td className="roomData-table__value edit">{parse(`${icons.edit}`)}</td>
                </tr>
            </tbody>
            {/* {booking.length > 0 && (
                <thead>
                    <tr>
                        <th>Номер брони</th>
                        <th></th>
                        <th>Дата заезда</th>
                        <th>Дата отъезда</th>
                        <th>Количество гостей</th>
                        <th>Стоимость бронирования</th>
                    </tr>
                </thead>
            )} */}
        </>
    );
};

RoomDataTable.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    maxNumberOfPersons: PropTypes.number,
    booking: PropTypes.array,
    priceList: PropTypes.object
};

export default RoomDataTable;
