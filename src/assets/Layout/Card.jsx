import React from 'react';
import icon1 from '../image/icon/icon1.png'
import icon2 from '../image/icon/icon2.png'
import icon3 from '../image/icon/icon3.png'

function Card() {
  const items = [
    {
      id: 1,
      title: 'lorem ipsum',
      icon: icon1,
      description: 'lorem ipsum dolor sit amet'
    },
    {
      id: 2,
      title: 'lorem ipsum',
      icon: icon2,
      description: 'lorem ipsum dolor sit amet'
    },
    {
      id: 3,
      title: 'lorem ipsum',
      icon: icon3,
      description: 'lorem ipsum dolor sit amet'
    }
  ];

  return (
    <div className='flex md:flex-row flex-col-reverse items-center justify-between gap-10'>
      {items.map((item) => (
        <div className="" key={item.id}>
          <div className="">
            <span className="">
              <img src={item.icon} alt="" className='w-12 h-12' />
            </span>
          </div>
          <h2 className="">
            {item.title}
          </h2>
          <p className="">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
