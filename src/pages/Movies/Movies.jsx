import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { searchMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import ErrorView from 'pages/ErrorView/ErrorView';
import { useRef } from 'react';
import { Container, Form, Button, Input } from './Movies.styled';

const Status = {
  RESOLVED: 'resolved',
  ERROR: 'error',
};

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState('');

  const input = useRef(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('query') ?? '';

  useEffect(() => {
    if (filter === '') {
      return;
    }

    input.current.value = filter;

    const fetchMovies = async () => {
      try {
        const data = await searchMovies(filter);

        if (data.length === 0) {
          setStatus(Status.ERROR);
          return;
        }

        setMovies(data);
        setStatus(Status.RESOLVED);
      } catch (error) {
        console.log(error);
        setStatus(Status.ERROR);
      }
    };

    fetchMovies();
  }, [filter]);

  const updateSearchParams = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    updateSearchParams(form.filter.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="filter"
          ref={input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <Button type="submit">
          Search
        </Button>
      </Form>
      {status === Status.ERROR && <ErrorView />}
      {status === Status.RESOLVED && <MoviesList movies={movies} />}
    </Container>
  );
}
