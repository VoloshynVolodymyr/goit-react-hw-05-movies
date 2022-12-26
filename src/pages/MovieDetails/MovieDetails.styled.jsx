import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

export const Container = styled.div`
background-color: ${p => p.theme.colors.bgColor};
height: 1200px;
`

export const Button = styled.button`
    display: inline-block;
  border: 0;
  opacity: 1;
  transition: 
     opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), 
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  padding: 8px 10px;
  background-color: ${p => p.theme.colors.accentGreenColor};
width: 300px;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  margin-bottom: 20px;

  :hover {
  opacity: 0.8;
  scale: 1.04;
}
`
export const LinkWrap = styled.ul`
    display: flex;
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 20px;
`

export const LinkItem = styled.li`
    text-decoration: none;
  padding: 6px 10px;
  background-color: ${p => p.theme.colors.accentGreenColor};
  color: #fff;
  border-radius: 3px;
  display: flex;
  margin-left: 10px;
  width: 120px;
  transition: 
     opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), 
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover {
  opacity: 0.8;
  scale: 1.04;}
`

export const LinkInner = styled(Link)`
    text-decoration: none;
  padding: 6px 10px;
  background-color: ${p => p.theme.colors.accentGreenColor};
  color: #fff;
  border-radius: 3px;
  display: flex;
  `

export const Info = styled.div`
    display: flex;
  padding-bottom: 20px;
`

export const ImageContainer = styled.div`
    min-width: 300px;
  max-width: 300px;
  margin-right: 20px;
`

export const Image = styled.img `
    max-width: 100%;
  max-height: 100%;
  display: block;
`
export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 450px;
`

export const Title = styled.h1`
    color: ${p => p.theme.colors.accentGreenColor};
`

export const SubTitle = styled.h2`
    color: ${p => p.theme.colors.accentGreenColor};
`

export const GenresP = styled.p`
    font-weight: bold;
    color: ${p => p.theme.colors.darkColor};
`