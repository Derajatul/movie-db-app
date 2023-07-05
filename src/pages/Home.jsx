import { useEffect, useState } from 'react';
import Card from '../components/Card';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          'http://www.omdbapi.com/?s=one piece&apikey=eec38979'
        );
        const data = await response.json();
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <section className='container  mt-7 text-white'>
      {/* <h1 className='text-3xl font-bold'>Selamat Datang</h1>
      <h2 className='mt-1 text-2xl'>
        Jelajahi dunia film dengan kami - setiap cerita memiliki keajaiban yang
        unik.
      </h2> */}
      <div className='flex flex-wrap justify-center'>
        {movies.map((movie) => (
          <Card
            key={movie.imdbID}
            title={movie.Title}
            year={movie.year}
            poster={movie.Poster}
            type={movie.Type}
          />
        ))}
      </div>
    </section>
  );
};
export default Home;
