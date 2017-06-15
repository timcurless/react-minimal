import styled from 'styled-components';


const A = styled.a`
  &:link, &:visited {
    text-decoration: none;
    border: 0;
    color: #888;
    -webkit-transition: color 0.2s;
    transition: color 0.2s;
  }

  &:hover, &:active {
    color: #ddd;
  }
`;

export default A;
