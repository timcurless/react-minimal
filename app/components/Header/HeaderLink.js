import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  &:link, &:visited {
    padding: 8px 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 90%;
    border-box: 2px solid transparent;
    -webkit-transition: border-bottom 0.2s;
    transition: border-bottom 0.2s;
  }

  &:active, &:hover {
    border-bottom: 2px solid #21aee4;
  }
`;
