import * as React from 'react';
import './App.css';
import AdGrid from "./Components/AdGrid";
import Header from './Components/Header';

class App extends React.Component {
  public render() {
    return (
      <>
        <Header>Header</Header>
        <AdGrid />
      </>
    );
  }
}

export default App;
