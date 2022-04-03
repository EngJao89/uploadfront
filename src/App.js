import React, { Component } from 'react';

import GlobalStyles from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Upload />
          <FileList />
        </Content>
        <GlobalStyles />
      </Container>);
  }
}

export default App;
