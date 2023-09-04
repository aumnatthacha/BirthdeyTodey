/* eslint-disable no-unused-vars */
// App.js
import React from 'react';
import { useState } from 'react';
import './App.css'; // เรียกใช้ CSS ที่คุณสร้าง
// eslint-disable-next-line no-unused-vars
import List from './components/List';
import data from "./data";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState(data);
  const clearAll = () => {
    setPeople([])
  }

  return (
    <>
      <div>
        <h1>WorkShop 1 : Birthday List</h1>
        <main>
          <section className='container'>
            <h3>{people.length}birthday today</h3>
            <List people = {people}/>
            <button onClick={clearAll}>Clear All</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
