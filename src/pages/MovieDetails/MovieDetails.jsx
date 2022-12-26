import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import useFetchMovieDetails from 'hooks/useFetchMovieDetails';
import {
  Container,
  Button,
  LinkWrap,
  LinkItem,
  LinkInner,
  Info,
  ImageContainer,
  Image,
  DescriptionWrapper,
  Title,
  SubTitle,
  GenresP,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const movieDetails = useFetchMovieDetails();

  const onBackButtonClick = () => {
    const back = location?.state?.from;
        
    if (back) {
      navigate(`/`, { replace: true });
      return;
    }
    navigate(`/`);
  };

  if (!movieDetails) {
    return;
  }

  const { id, title, vote_average, overview, genres, backdrop_path } =
    movieDetails;

  return (
    <Container>
      <Button type="button" onClick={onBackButtonClick}>
        Go back
      </Button>
      <Info>
        <ImageContainer>
          <Image
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${backdrop_path}`}
            alt={title}
          />
        </ImageContainer>
        <DescriptionWrapper>
          <Title>{title}</Title>
          <p><b>User rating: {Math.round(vote_average * 10)}%</b></p>
          <SubTitle>Overview</SubTitle>
          <p>{overview}</p>
          <SubTitle>Genres</SubTitle>
          <GenresP>{genres.map(({ name }) => name).join(' ')}</GenresP>
        </DescriptionWrapper>
      </Info>
      <div>
        <h3>Additional information</h3>
        <LinkWrap>
          <LinkItem>
            <LinkInner to="cast" state={{ from: location.state.from }}>
              Cast
            </LinkInner>
          </LinkItem>
          <LinkItem>
            <LinkInner to="reviews" state={{ from: location.state.from }}>
              Reviews
            </LinkInner>
          </LinkItem>
        </LinkWrap>
      </div>
      <Suspense fallback={null}>
        <Outlet context={id} />
      </Suspense>
    </Container>
  );
}
