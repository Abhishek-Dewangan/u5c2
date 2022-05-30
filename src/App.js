import React from 'react';
import { Input } from './Components/Input';
import { Image } from './Components/Image';
import { Pagination } from './Components/Pagination';
import eye from './Components/eye.svg';

function App() {
  const inputdata = {
    type: 'true',
    size: 'lg',
    variant: 'outline',
    rightLogo: eye,
  };
  const onChange = (text) => {
    console.log('hello change', text);
  };
  const rightLogoOnClick = (typeof1) => {
    inputdata.type = typeof1;
    console.log('Hello click', typeof1);
  };
  return (
    <div className='container'>
      <Input
        {...inputdata}
        onChange={onChange}
        rightLogoOnClick={rightLogoOnClick}
      />

      <Image
        height={'150px'}
        width={'150px'}
        borderRadius={'10%'}
        fit='cover'
        alt={'image'}
        src={
          'https://avatars.githubusercontent.com/u/99542668?s=400&u=3f0d0560124d34825b1338253c6ff11ce5afe4b4&v=4'
        }
      />

      <Pagination total={20} onPageChange={7} selected={true} />
    </div>
  );
}

export default App;
