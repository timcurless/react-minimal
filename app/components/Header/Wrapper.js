import styled from 'styled-components';
import Banner from './chitown-min.jpg';


const Wrapper = styled.header`
  background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Banner});
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Banner});
  background-size: cover;
  background-position: center;
  height: 40vh;
  background-attachment: fixed;
`;

export default Wrapper;
