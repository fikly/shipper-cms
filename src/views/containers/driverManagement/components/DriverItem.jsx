import React from 'react';
import dayjs from 'dayjs';
import {AiOutlineEllipsis} from 'react-icons/ai';
import {addDefaultUserSrc} from '~/libraries/defaultImage';
import DriverItemLabel from './DriverItemLabel';

const DriverItem = ({user}) => {
    return (
        <div className="driver-item">
            <div className="item-header">
                <h5 className="color-grey font-400">Driver ID <span className="color-primary font-600">{user.login.username}</span></h5>
                <AiOutlineEllipsis className="color-grey font-18" />
            </div>
            <div className="item-body">
                <img src={user.picture.thumbnail} alt={user.name.first} className="avatar" onError={addDefaultUserSrc} />
                <div>
                    <DriverItemLabel label="Nama Driver" value={`${user.name.first},${user.name.last}`} />
                    <DriverItemLabel label="Telepon" value={user.phone} />
                    <DriverItemLabel label="Email" value={user.email} />
                    <DriverItemLabel label="Tanggal Lahir" value={dayjs(new Date(user.dob.date)).format('DD-MM-YYYY')} />
                </div>
            </div>
        </div>
    );
};

export default DriverItem;
