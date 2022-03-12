import React, { useState } from "react";
import "./App.css";
import { FilterBar } from "./components/FilterBar";
import { Jobs } from "./components/Jobs";

export const CatContext = React.createContext();

function App() {
  const [cats, setCats] = useState([]);
  return (
    <CatContext.Provider value={{ cats, setCats }}>
      <main>
        <header>
          <FilterBar />
        </header>
        <section className='body'>
          <div className='jobs-container'>
            <Jobs />
          </div>
        </section>
        <div className='attribution'>
          Challenge by{" "}
          <a
            href='https://www.frontendmentor.io?ref=challenge'
            rel='noreferrer'
            target='_blank'
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.frontendmentor.io/profile/Glory135'
          >
            Glory
          </a>
          .
        </div>
      </main>
    </CatContext.Provider>
  );
}

export default App;
