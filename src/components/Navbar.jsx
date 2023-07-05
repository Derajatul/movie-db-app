import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: '#1D4ED8',
    textDecorationThickness: 4,
  };
  return (
    <header className='flex h-24 items-center border-b'>
      <nav className='container flex justify-between text-white'>
        <div className='flex items-center'>
          <Link className='text-2xl font-bold'>MoviesDB</Link>
          <div className='ml-8'>
            <NavLink
            to='/'
              className='px-8 py-3 text-base font-normal'
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Home
            </NavLink>
            {/* <NavLink
              className='px-8 py-3 text-base font-normal'
              style={({ isActive }) => (isActive ? activeStyle : null)}
              to=''
            >
              Movies
            </NavLink> */}
          </div>
        </div>
        <input
          type='search'
          placeholder='Search'
          className='selection:border-non h-12 w-[270px] rounded-[46px] bg-[#192642] px-4'
        />
      </nav>
    </header>
  );
};
export default Navbar;
