import {useEffect,React} from 'react'
import about from '../assets/image/about.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
    <div className='bg-gray-50'>
      <div className="flex flex-col items-center justify-between px-10 py-10 md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={about} alt="" className="" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="mb-6 text-3xl font-semibold text-center capitalize md:text-start first-letter:capitalize">
           the unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-base font-light text-center md:text-start text-neutralDGray first-letter:capitalize ">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore qui sed, voluptatem amet in sint ratione labore reprehenderit earum? Consectetur corporis expedita a? Odio debitis, nemo adipisci quo culpa eum, neque ex aliquid, minus id blanditiis enim. Molestias, quibusdam accusamus.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="px-6 py-3 mt-6 text-white capitalize transition-transform duration-300 rounded bg-brandPrimary hover:bg-neutralDGray hover:text-white hover:-translate-y-2">
              learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About