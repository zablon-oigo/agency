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
    <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
      {items.map((item) => (
        <div className="px-10 py-10 transition-all duration-300 bg-white shadow-2xl rounded-xl hover:-translate-y-2 hover:border-b-8 hover:border-brandPrimary" key={item.id}>
          <div className="">
            <span className="">
              <img src={item.icon} alt="" className='w-12 h-12 mx-auto' />
            </span>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-center capitalize text-neutralDGray">
            {item.title}
          </h2>
          <p className="text-center text-md text-neutralGray first-letter:capitalize ">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
