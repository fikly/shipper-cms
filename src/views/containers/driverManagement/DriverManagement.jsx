import React, {Fragment, useEffect, useState} from 'react';
import {AiOutlinePlus, AiOutlineSearch} from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import CustomButton from '~/components/button/CustomButton';
import Loading from '~/components/loading/Loading';
import PageHeader from '~/components/pageheader/Pageheader';
import Pagination from '~/components/pagination/Pagination';
import Textfield from '~/components/textfield/Textfield';
import {getDataUser} from '~/controllers/users';
import {getSliceData} from '~/libraries/pagination';
import {SEARCH_USERS, SET_USERS} from '~/states/actions/usersAction';
import DriverItem from './components/DriverItem';

import './driverManagement.scss';

const DriverManagement = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [isLoading, setIsLoading] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const params = new URLSearchParams(location.search);
    const limit = 5;
    const getSlice = getSliceData(params, limit);

    useEffect(() => {
        const getUser = async () => {
            setIsLoading(true);
            const users = await getDataUser(30);
            if (users.status) {
                dispatch({type: SET_USERS, data: users.list});
            }
            setIsLoading(false);
        };

        getUser();
    }, []);

    const onChangeSearch = (value) => {
        dispatch({type: SEARCH_USERS, data: value});
        history.push('/');
    };

    return (
        <div className="driver-container">
            <PageHeader title="Driver Management" desc="Data driver yang bekerja dengan anda">
                <Textfield
                    onChange={(e) => onChangeSearch(e.target.value)}
                    placeholder="Cari Driver"
                    icon={<AiOutlineSearch className="icon font-18 color-primary" />}
                />
                <CustomButton type="primary">
                    <span className="text-uppercase">Tambah Driver</span>
                    <AiOutlinePlus className="font-18 ml-8p" />
                </CustomButton>
            </PageHeader>
            {isLoading &&
            <Loading />}
            {!isLoading && users.list.length > 0 ? (
                <Fragment>
                    <div className="horizontal-list">
                        {users.list.slice(getSlice.from, getSlice.to).map((user, index) => {
                            return (
                                <DriverItem key={index} user={user} />
                            );
                        })}
                    </div>
                    <Pagination total={users.list.length} limit={limit} current={getSlice.page} />
                </Fragment> ) : (
                <div className="alert ml-24p mr-24p">
                    <h5 className="color-grey font-500">Data yang anda cari tidak ditemukan</h5>
                </div>
            )}
        </div>
    );
};

export default DriverManagement;
