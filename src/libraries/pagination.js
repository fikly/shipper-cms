import {PARAMS_PAGE} from '~/constants/urlParams';

export const getSliceData = (params, limit) => {
    const page = parseInt((params.get(PARAMS_PAGE) ? params.get(PARAMS_PAGE) : 1));
    const from = (page - 1) * limit;
    const to = page * limit;

    return {
        from,
        to,
        page,
    };
};
