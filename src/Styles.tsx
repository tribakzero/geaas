import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Emoji from 'a11y-react-emoji';

injectGlobal`
  body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  background-color: #282C34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
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

export const StyledPrimaryFieldset = styled.fieldset`
  user-select: none;
  width: 70%;
  background-color: #161a1f;
  border: 0;
  border-radius: 0.5em;
  margin: 1em;
`;

export const StyledSecondaryFieldset = styled.fieldset`
  user-select: none;
  width: 70%;
  background-color: #161a1f;
  border: 0;
  border-radius: 0.5em;
  margin: 1em;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledHalfLabel = styled.label`
  box-sizing: border-box;
  padding: 0.5em;
  width: 50%;

  @media (max-width: 619px) {
    width: 100%;
  }
`;

export const StyledThirdLabel = styled(StyledHalfLabel)`
  width: 33.3%;
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
  color: #FFFFFF;
  padding: 0.5em;
  border-radius: 0.5em;
  &:visited, &:hover {
    background-color: #222222;
    color: #EEEEEE;
  }
`;

export const StyledGrayableEmoji = styled(({ grayscale:Boolean, ...props }) => <Emoji {...props} />)`
  filter: grayscale(${props => props.grayscale ? 100 : 0}%);
`;