import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input test', () => {
    test('Test render', () => {
        render(<Input aria-label="input" value="" />);
        const inputOur = screen.getByLabelText('input');
        fireEvent.change(inputOur, { target: { value: 'привет' } });
        expect(inputOur).toBeInTheDocument();
        screen.debug();
    });
});

// дописать
