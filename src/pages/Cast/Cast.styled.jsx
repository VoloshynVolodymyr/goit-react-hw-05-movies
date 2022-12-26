import styled from "@emotion/styled";

export const MovieCardWrapper = styled.ul`
    list-style: none;
     padding: 0;
     background-color: ${p => p.theme.colors.bgColor}
`

export const ImageContainer = styled.div`
    min-width: 160px;
  max-width: 160px;
  min-height: 240px;
  margin-bottom: 10px;
`

export const Image = styled.img`
    max-width: 100%;
  max-height: 100%;
  display: block;
`