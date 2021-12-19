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
        if (!getDataUser) {
            getDataUser = await apiService({
                endpoint: UsersAPI,
                addOnUrl: `?results=${limit}`,
            });
            encryptStorage.setItem(USERS, getDataUser);
        }
        if (getDataUser.results) {
            result.list = getDataUser.results;
            result.status = true;
        }
    } catch (error) {
        console.log(error);
    }

    return result;
};
