import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('one piece');
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=${encodeURIComponent(
            search
          )}&apikey=eec38979`
        );
        const data = await response.json();

        if (response.ok && data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [search]);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };
  const handleKey = (e) => {
    if (e.key == 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    const value = document.getElementById('searchInput');
    setSearch(value.value);
  };
  return (
    <section className='container text-white'>
      <input
        id='searchInput'
        type='text'
        placeholder='Search'
        className='selection:border-non h-12 w-[270px] rounded-[46px] border bg-[#192642] px-4 mt-5'
        onKeyDown={handleKey}
      />
      <button
        type='submit'
        onClick={handleSubmit}
        className=' bg-white px-5 py-2 text-black sm:m-5 my-5 rounded-full'
      >
        Submit
      </button>

      <div className='flex flex-wrap justify-center'>
        {movies.map((movie) => (
          <Card key={movie.imdbID} title={movie.Title} poster={movie.Poster} />
        ))}
      </div>
    </section>
  );
};
export default Home;
