import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Card = ({ title, poster}) => {
  return (
    <Link to={title} className=' cursor-pointer'>
      <div className='m-5 max-w-[400px] cursor-pointer'>
        <img src={poster} alt={title} className='w-full object-cover' />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};
export default Card;
