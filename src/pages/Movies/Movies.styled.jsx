import styled from "@emotion/styled";

export const Container = styled.div`
    height: 1200px;
    background-color: ${p => p.theme.colors.bgColor};
`

export const Form = styled.form`
    display: flex;
  align-items: center;
  padding-top: ${p => p.theme.spacing(5)};
  padding-left: ${p => p.theme.spacing(5)};
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  margin-bottom: ${p => p.theme.spacing(5)};
`

export const Button = styled.button`
    display: inline-block;
  border: 0;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(3)};
  background-color: ${p => p.theme.colors.accentGreenColor};
  font-size: ${p => p.theme.spacing(4)};
  color: #fff;
  border-radius: ${p => p.theme.spacing(1)};

  :hover {
  opacity: 0.9;
}
`

export const Input = styled.input`
    display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.spacing(4)};
  outline: none;
  padding: 6px;
  border: #2980b9 solid 2px;
  border-radius: ${p => p.theme.spacing(1)};
  margin-right: ${p => p.theme.spacing(3)};

  ::placeholder {
  font: inherit;
  font-size: ${p => p.theme.spacing(4)};
}
`