import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import imgChart from './assets/chart.png';
import { DbStorage } from './dbContext';
import React from 'react';

function App() {
  const [data, setData] = React.useState([]);

  const handleDataSubmit = (newData) => {
    setData([...data, newData]);
  };

  return (
    <>
      <Header onDataSubmit={handleDataSubmit} />

      <main>
        <h1>DATA</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <section className="container">
          <Table data={data} />
          <div className="chart">
            <img src={imgChart} alt="" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
