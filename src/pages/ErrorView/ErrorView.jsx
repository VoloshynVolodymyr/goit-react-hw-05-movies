import ErrorImage from '../../images/nothing.jpg'
import { ErrorContainer, Image} from './ErrorView.styled';

export default function ErrorView() {
  return (
    <ErrorContainer>
      <Image src={ErrorImage} alt="Error" width="60%" />
    </ErrorContainer>
  );
}
