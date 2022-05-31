import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination } from '../Components/Pagination';

describe('test for the pagination element', () => {
  it('should have pagination element in dom', () => {
    render(<Pagination />);
    let btn = screen.getByTestId('prevbtn');
    expect(btn).toBeInTheDocument();
  });

  it('should have next btn', () => {
    render(<Pagination />);
    let btn = screen.getByTestId('nextbtn');

    expect(btn).toBeInTheDocument();
  });
});
