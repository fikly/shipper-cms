import axios from 'axios';

export const apiService = async ({endpoint, data, addOnUrl}) => {
    let result= [];
    let [baseURL, method, url, addOn] = endpoint;
    url += addOn ? addOnUrl : '';

    await axios({
        baseURL,
        method,
        url,
        data,
    }).then(function(response) {
        result = response.data;
    }).catch(function(error) {
        result = error.response;
    });

    return result;
};
