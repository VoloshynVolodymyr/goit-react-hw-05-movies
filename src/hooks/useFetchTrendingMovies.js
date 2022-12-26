import { useEffect } from 'react';
import { useState } from 'react';
import { getTrending } from 'services/api';

export default function useFetchTrendingMovies(page) {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        const films = await getTrending(page);
        setTrending(films);
      } catch (error) {
        console.log(error);
        return error;
      }
    };

    fetchTrendingFilms();
  }, [page]);

  return trending;
}
