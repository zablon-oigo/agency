import React from 'react';
import icon1 from '../image/icon/icon1.png'
import icon2 from '../image/icon/icon2.png'
import icon3 from '../image/icon/icon3.png'

function Card() {
  const items = [
    {
      id: 1,
      title: 'membership organization',
      icon: icon1,
      description: 'our membership management software provides full automation of membership renewals amd payment'
    },
    {
      id: 2,
      title: 'national associations',
      icon: icon2,
      description: 'our membership management software provides full automation of membership renewals amd payment'
    },
    {
      id: 3,
      title: 'clubs and groups',
      icon: icon3,
      description: 'our membership management software provides full automation of membership renewals amd payment'
    }
  ];

  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 '>
      {items.map((item) => (
        <div className="bg-white shadow-2xl rounded-xl  px-10 py-10" key={item.id}>
          <div className="">
            <span className="">
              <img src={item.icon} alt="" className='mx-auto w-12 h-12' />
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-neutralDGray capitalize text-center">
            {item.title}
          </h2>
          <p className="text-md text-neutralGray  first-letter:capitalize text-center ">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
