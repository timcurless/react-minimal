import styled from 'styled-components';


const H2 = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-size: 180%;
  word-spacing: 2px;
  letter-spacing: 1px;
  text-align: center;

  &:after {
    display: block;
    height: 2px;
    background-color: #21aee4;
    content: " ";
    width: 100px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;


export default H2;
