import React, { useContext } from "react";
import { CatContext } from "../App";
import close from "../images/icon-remove.svg";

export const FilterBar = () => {
  const { cats, setCats } = useContext(CatContext);

  return (
    <section
      style={{ display: cats.length > 0 ? "flex" : "none" }}
      className='filterBar'
    >
      <div className='filter-section'>
        {cats.map((cat) => {
          return (
            <div className='filter-item'>
              {cat}
              <div
                onClick={() => {
                  const newCats = cats.filter((i) => i !== cat);
                  console.log(newCats);
                  setCats(newCats);
                }}
                className='close-container'
              >
                <img src={close} alt='close' />
              </div>{" "}
            </div>
          );
        })}
      </div>
      <div className='clear-container'>
        <span onClick={() => setCats([])}>clear</span>
      </div>
    </section>
  );
};
