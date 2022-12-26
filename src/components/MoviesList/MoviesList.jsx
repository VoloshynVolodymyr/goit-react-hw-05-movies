import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieList, MovieListItem, LinkItem, WrapperItem, Image, Text } from './Movies.styled';

export default function MoviesList({ movies, route = '' }) {
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ id, title, poster_path }) => (
        <MovieListItem key={id}>
          <LinkItem
            to={`${route}${id}`}
            state={{ from: location }}
          >
            <WrapperItem>
            <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          loading="lazy"
           />
            <Text>{title}</Text>
            </WrapperItem>
          </LinkItem>
        </MovieListItem>
      ))}
    </MovieList>
  );
}

MoviesList.protoTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  route: PropTypes.string,
};
