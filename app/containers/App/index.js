import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  background-color: #fff;
  color: #555;
  font-family: 'Lato', 'Arial', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
`;

export function App(props) {
  return (
    <AppWrapper>
      {React.Children.toArray(props.children)}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
