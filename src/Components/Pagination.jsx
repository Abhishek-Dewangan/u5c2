import './Pagination.css';
export const Pagination = ({ total, selected, onPageChange }) => {
  return (
    <div className='pageContainer'>
      <button
        onClick={() => {
          if (selected >= 1) {
            onPageChange(selected - 1);
          }
        }}>
        prev
      </button>
      {new Array(total).fill(1).map((el, index) => {
        return (
          <button
            data-testid='pagetc'
            key={index}
            onClick={() => onPageChange(index)}
            className={selected === index && 'selected'}>
            {index + 1}
          </button>
        );
      })}
      <button
        onClick={() => {
          if (selected < total - 1) {
            onPageChange(selected + 1);
          }
        }}>
        next
      </button>
    </div>
  );
};
