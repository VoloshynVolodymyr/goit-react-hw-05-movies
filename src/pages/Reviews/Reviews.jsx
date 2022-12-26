import { useOutletContext } from 'react-router-dom';

import useFetchAdditionalInfo from 'hooks/useFetchAdditionalInfo';
import { ListUl, AuthorP } from './Reviews.styled';

export default function Reviews() {
  const movieId = useOutletContext();
  const reviews = useFetchAdditionalInfo('reviews', movieId);

  if (!reviews) {
    return;
  }

  return (
    <ListUl>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <AuthorP>Author: {author}</AuthorP>
          <p>{content}</p>
        </li>
      ))}
    </ListUl>
  );
}
