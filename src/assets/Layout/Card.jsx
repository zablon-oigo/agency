import React from 'react';

function Card() {
  const items = [
    {
      id: 1,
      title: 'lorem ipsum',
      icon: '',
      description: 'lorem ipsum dolor sit amet'
    },
    {
      id: 2,
      title: 'lorem ipsum',
      icon: '',
      description: 'lorem ipsum dolor sit amet'
    },
    {
      id: 3,
      title: 'lorem ipsum',
      icon: '',
      description: 'lorem ipsum dolor sit amet'
    }
  ];

  return (
    <div className='flex items-center justify-between gap-10'>
      {items.map((item) => (
        <div className="" key={item.id}>
          <div className="">
            <span className="">
              {item.icon}
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
