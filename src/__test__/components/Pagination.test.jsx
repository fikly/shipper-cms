import React from 'react';
import {render, screen} from '@testing-library/react';
import Pagination from '../../components/pagination/Pagination';

test('pagination render data correctly', () => {
    const total = 10;
    const limit = 5;
    const current = 1;
    const totalPage = Math.ceil(total / limit);

    render(
        <Pagination total={total} limit={limit} current={current} />,
    );

    expect(screen.queryByText(`${current} of ${totalPage}`)).toBeTruthy();
});
