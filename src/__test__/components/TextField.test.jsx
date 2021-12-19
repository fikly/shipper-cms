import React from 'react';
import {render, screen} from '@testing-library/react';
import Textfield from '../../components/textfield/Textfield';

test('textfield render data correctly', () => {
    const placeholder = 'placeholder text';

    render(
        <Textfield placeholder={placeholder} />,
    );

    expect(screen.getByTestId('textfield')).toHaveAttribute('placeholder', placeholder);
});
