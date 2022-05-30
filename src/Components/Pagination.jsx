export const Pagination = ({ total, selected, onPageChange }) => {
  let array = new Array(total);
  array.fill(0);
  return (
    <div className='pageContainer' style={{ display: 'flex' }}>
      <div>
        <button data-testId='prevbtn' style={{ fontSize: '40px' }}>
          {' '}
          {`<`}{' '}
        </button>
      </div>
      {array.map((elem, index) => (
        <div
          style={{
            border: 'solid 1px',
            margin: '3px',
            fontSize: '30px',
            width: '50px',
            textAlign: 'center',
          }}
          key={index}>
          {index + 1}
        </div>
      ))}
      <div>
        <button data-testId='nextbtn' style={{ fontSize: '40px' }}>
          {' '}
          {`>`}{' '}
        </button>
      </div>
    </div>
  );
};
