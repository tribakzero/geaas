import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  text-align: center;
  color: #FFFFFF;
  min-height: 100vh;
  }
`;

interface GrayscaleProps {
  grayscale: boolean;
}

export const StyledAppWrapper = styled.div<GrayscaleProps>`
  margin: 0;
  padding: 1em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  transition-property: filter;
  transition-duration: 0.5s;
  filter: grayscale(${(props) => (props.grayscale ? 100 : 0)}%);
`;

export const StyledHeader = styled.header`
  margin: 1em;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  font-size: 3em;
`;

export const StyledSubtitle = styled.p`
  margin: 0;
  font-size: 0.8em;
`;

export const StyledFieldset = styled.fieldset`
  user-select: none;
  width: 70%;
  background-color: #161a1f;
  border: 0;
  border-radius: 0.5em;
  margin: 1em auto;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledHalfLabel = styled.label`
  box-sizing: border-box;
  padding: 0.5em;
  width: 50%;
`;

export const StyledThirdLabel = styled(StyledHalfLabel)`
  width: 33.3%;

  @media (max-width: 619px) {
    width: 100%;
  }
`;

export const StyledInput = styled.input`
  margin: 0.5em;
`;

export const StyledBlockInput = styled(StyledInput)`
  display: block;
  width: 100%;
`;

export const StyledLink = styled.a`
  margin: 1em;
  font-weight: bold;
  text-decoration: none;
  background-color: #111111;
  color: #ffffff;
  padding: 0.5em;
  border-radius: 0.5em;
  &:visited,
  &:hover {
    background-color: #222222;
    color: #eeeeee;
  }
`;
