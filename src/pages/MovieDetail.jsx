import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    return <p>Loading...</p>;
  }

  return (
    <section className='container'>
      <div className='flex mt-10'>
        <img
          src={detail.Poster}
          alt={detail.Title}
          className='  w-[300px] rounded-3xl'
        />
        <div className='ml-10 text-white'>
            <h2 className='text-4xl font-bold'>{detail.Title}</h2>
        </div>
      </div>
    </section>
  );
};
export default MovieDetail;
