import {useEffect,React} from 'react'
import icon1 from '../image/icon/icon1.png'
import icon2 from '../image/icon/icon2.png'
import icon3 from '../image/icon/icon3.png'
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
function Card() {
  useEffect(()=>{
    AOS.init()
  },[])
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
        <div className="px-10 py-10 transition-all duration-300 bg-white shadow-2xl group rounded-xl hover:-translate-y-2 hover:border-b-8 hover:border-brandPrimary" key={item.id}
        data-aos="fade-left"  data-aos-duration="3000" data-easing="ease-in-sine" >
          <div className="">
            <span className="">
              <img src={item.icon} alt="" className='w-12 h-12 mx-auto group-hover:bg-[#A5D6A7] rounded-full ' />
            </span>
          </div>
          <h2 className="mb-2 font-semibold text-center capitalize duration-300 text-md md:text-xl group-hover:text-brandPrimary text-neutralDGray">
            {item.title}
          </h2>
          <p className="text-sm text-center md:text-md text-neutralGray first-letter:capitalize group-hover:text-neutralDGray ">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
