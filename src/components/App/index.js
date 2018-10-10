import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { colorsDark } from 'styles/palette';
import List from 'components/List';

import { Wrapper, Title } from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colorsDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Clone</Title>
            <List />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
