import { fireEvent, render, screen } from '@testing-library/react';
// import renderer from 'react-test-render'
import { Input } from '../Components/Input';

describe('test for the input element', () => {
  it('should have input element in dom', () => {
    render(<Input />);
    let input = screen.getByTestId('inputBox');
    expect(input).toBeInTheDocument();
  });
  it('should be able to type check', () => {
    render(<Input />);
    let input = screen.getByTestId('inputBox');

    expect(input).type('helloworld');

    expect(input).should('have.text', 'helloworld');

    expect(input).shoild('have.text.type', 'password');
  });

  it('should be able to type check', () => {
    render(<Input />);
    let icon = screen.getByTestId('eye');
    let input = screen.getByTestId('inputBox');

    expect(input).type('helloworld');
    expect(icon).click();

    expect(input).should('have.text', 'helloworld');

    expect(input).shoild('have.text.type', 'text');
  });
});
