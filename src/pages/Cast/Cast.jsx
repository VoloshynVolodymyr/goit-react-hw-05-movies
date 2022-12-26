import { useOutletContext } from 'react-router-dom';
import useFetchAdditionalInfo from 'hooks/useFetchAdditionalInfo';
import { MovieCardWrapper, ImageContainer, Image } from './Cast.styled';

export default function Cast() {
  const movieId = useOutletContext();

  const cast = useFetchAdditionalInfo('cast', movieId);

  if (!cast) {
    return;
  }

  return (
    <MovieCardWrapper>
      {cast.map(({ id, name, character, profile_path }) => (
        profile_path&&<li key={id}>
          <ImageContainer>
            profile_path<Image
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`}
              alt={name}
            />
          </ImageContainer>
          <div>
            <p>{name}</p>
            <p>
              <span>Character:</span> {character}
            </p>
          </div>
        </li>
      ))}
    </MovieCardWrapper>
  );
}
