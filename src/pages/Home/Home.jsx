import useFetchTrendingMovies from 'hooks/useFetchTrendingMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { Container, Button } from './Home.styled';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [numberPage, setnumberPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const onButtonClick = () => {
    setnumberPage(prev => prev + 1);
    setSearchParams({ page: numberPage + 1 });
    if (searchParams.get('page') === null) {
      setnumberPage(2);
    }
  };

  const param = searchParams.get('page');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const trending =Number(param) === 0?useFetchTrendingMovies(1):useFetchTrendingMovies(numberPage);

  if (!trending) {
    return;
  }

  return (
    <Container>
      {trending && <MoviesList movies={trending} route={'movies/'} />}
      <Button type="button" onClick={onButtonClick}>
        Next page
      </Button>
    </Container>
  );
}
