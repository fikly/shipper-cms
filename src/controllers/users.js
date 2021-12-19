import {notify} from 'react-notify-toast';
import {USERS} from '~/constants/localstorageKey';
import {encryptStorage} from '~/libraries/encryptStorage';
import {UsersAPI} from '~/services/serviceApi';
import {apiService} from '~/services/serviceGeneral';

export const getDataUser = async (limit) => {
    const result = {
        list: [],
        status: false,
    };
    try {
        let getDataUser = encryptStorage.getItem(USERS);
        let getFromApi = false;
        if (!getDataUser) {
            getDataUser = await apiService({
                endpoint: UsersAPI,
                addOnUrl: `?results=${limit}`,
            });
            getFromApi = true;
        }
        if (getDataUser.status) {
            notify.show(getDataUser.data, 'error');
        } else {
            if (getDataUser.results) {
                result.list = getDataUser.results;
                result.status = true;
            }
            if (getFromApi) {
                encryptStorage.setItem(USERS, getDataUser);
            }
        }
    } catch (error) {
        notify.show('Terjadi kesalahan saat menggambil data.', 'error');
    }

    return result;
};
