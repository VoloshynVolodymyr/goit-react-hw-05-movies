import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: ${p => p.theme.colors.bgColor};
    text-align: center;
    padding-bottom: ${p => p.theme.spacing(15)};
    padding-top: ${p => p.theme.spacing(10)};
`

export const Button = styled.button`
margin: 20px auto;
padding: ${p => p.theme.spacing(3)};
    width: 80%;
    font-size: ${p => p.theme.spacing(6)};
    font-weight: bold;
    background-color: ${p => p.theme.colors.secondbgColor};
    color: ${props => props.theme.colors.accentBlueColor};
    border-radius: ${p => p.theme.spacing(2)};
    border: none;
    cursor: pointer;
    box-shadow: 0 2px 2px ${props => props.theme.colors.secondbgColor}, 0 2px 2px ${props => props.theme.colors.secondbgColor};`