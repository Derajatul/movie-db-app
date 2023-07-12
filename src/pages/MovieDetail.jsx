import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const MovieDetail = () => {
  const params = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${params.title}&apikey=eec38979`
      );
      const data = await response.json();
      // console.log(data)
      setDetail(data);
      setLoading(false);
    };
    fetchData();
  }, [params.title]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='container'>
      <div className='mt-10 flex flex-wrap lg:flex-nowrap'>
        <img
          src={detail.Poster}
          alt={detail.Title}
          className='max-w-[300px] rounded-3xl mx-auto lg:m-0'
        />
        <div className='mt-5 text-white lg:ml-10'> 
          <h2 className='text-xl font-bold lg:text-4xl'>{detail.Title}</h2>
          <div className='flex mt-6 flex-wrap lg:flex-nowrap'>
            <div>
              <h3 className='text-base font-bold text-white'>STORYLINE</h3>
              <p className='mt-3 text-base font-normal'>{detail.Plot}</p>
              <div className='mt-6 flex'>
                <h3 className='flex-1 text-[#606060]'>Rating</h3>
                <h3 className='flex-1'>{detail.imdbRating}</h3>
              </div>
              <div className='mt-3 flex'>
                <h3 className='flex-1 text-[#606060]'>Release year</h3>
                <h3 className='flex-1'>{detail.Released}</h3>
              </div>
              <div className='mt-3 flex'>
                <h3 className='flex-1 text-[#606060]'>Genres</h3>
                <h3 className='flex-1'>{detail.Genre}</h3>
              </div>
              <div className='mt-3 flex'>
                <h3 className='flex-1 text-[#606060]'>Countries</h3>
                <h3 className='flex-1'>{detail.Country}</h3>
              </div>
              <div className='mt-3 flex'>
                <h3 className='flex-1 text-[#606060]'>Duration</h3>
                <h3 className='flex-1'>{detail.Runtime}</h3>
              </div>
            </div>
            <div className='lg:ml-5'>
              <h3 className='text-base font-bold text-white'>Writen By</h3>
              <p className='mt-3 text-base font-normal'>{detail.Writer}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieDetail;
