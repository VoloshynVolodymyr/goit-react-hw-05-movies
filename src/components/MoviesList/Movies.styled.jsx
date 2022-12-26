import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  padding-left: ${p => p.theme.spacing(5)};
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(5)};
  justify-content: center;
  position:relative;
   
    
`;

export const MovieListItem = styled.li`
  text-decoration: none;
  transition: scale 250ms easy;
  :hover {
    scale: 1.008;
  }
`;

export const LinkItem = styled(Link)`
  color: ${props => props.theme.colors.darkColor};
  font-weight: bold;
`;

export const WrapperItem = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`
export const Image = styled.img`
  border-radius: ${p => p.theme.spacing(3)};
  box-shadow: 0 4px 8px ${props => props.theme.colors.secondbgColor}, 0 8px 16px ${props => props.theme.colors.secondbgColor};
`

export const Text = styled.p`
  color: ${props => props.theme.colors.accentBlueColor};
`