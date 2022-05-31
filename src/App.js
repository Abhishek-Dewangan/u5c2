import { Input } from './Components/Input';
import { Image } from './Components/Image';
import { Pagination } from './Components/Pagination';
import { useState } from 'react';
import eye from './Components/eye.svg';
function App() {
  const [input, setInput] = useState('');
  const [state, setstate] = useState(input);
  const md = '40';
  const handlerightLogoOnClick = (e) => {
    setstate(state === 'text' ? 'password' : 'text');
  };
  let [selected, setselected] = useState(0);
  let onPageChange = (x) => {
    setselected(x);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className='container'>
      <Input
        type={state}
        size={md}
        variant='outline'
        rightLogo={eye}
        rightLogoOnClick={() => handlerightLogoOnClick()}
        onChange={handleChange}
      />
      <Image
        src='https://avatars.githubusercontent.com/u/99542668?s=400&u=3f0d0560124d34825b1338253c6ff11ce5afe4b4&v=4'
        alt='input'
        height='100px'
        width='100px'
        borderRadius='100px'
        fit='cover'
      />
      <Pagination selected={selected} onPageChange={onPageChange} total={10} />
    </div>
  );
}

export default App;
