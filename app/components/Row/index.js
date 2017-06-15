import styled from 'styled-components';

const Row = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  &:before,
  &:after {
    content: "";
    display: table;
  }

  &:after {
    clear: both;
  }
`;

export default Row;
