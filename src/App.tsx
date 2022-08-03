import React from 'react';
import ReactSkela, { Table, Card, SkelaBar } from './components';

function App() {
  return (
    <div className="App">
      {/* <ReactSkela  /> */}
      <SkelaBar />
      <Card cardWidth="200px" square={false} title={false}  cardHeight="300px" animationType="pulse" />
      {/* <Table cols={4} rows={4} color="orange" /> */}
    </div>
  );
}

export default App;
