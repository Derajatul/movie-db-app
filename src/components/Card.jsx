import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Card = ({ title, year, poster, type}) => {
  return (
    <Link to={title} className=' cursor-pointer'>
      <div className='m-5 h-[350px] w-[220px] cursor-pointer'>
        <img src={poster} alt={title} className='w-full object-cover' />
        <h2>{title}</h2>
        <h2>{year}</h2>
        <h2>{type}</h2>
      </div>
    </Link>
  );
};
export default Card;
