import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('test render value', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('test increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const toggleBtn = screen.getByTestId('increment-btn');
        userEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
        // screen.debug();
    });

    test('test decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        const toggleBtn = screen.getByTestId('decrement-btn');
        userEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
        // screen.debug();
    });
});
