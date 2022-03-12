import React, { useContext } from "react";
import { CatContext } from "../App";

export const Job = ({ data }) => {
  const { cats, setCats } = useContext(CatContext);

  const handleClick = (e) => {
    const cat = e.target.outerText;
    const newCats = [...cats];
    newCats.push(cat);
    setCats(newCats);
  };
  return (
    <div className='job'>
      <div
        className='feature-indication'
        style={{
          backgroundColor: data.featured ? "hsl(180, 29%, 50%)" : "transparent",
        }}
      ></div>
      <div className='job-container'>
        <div className='job-logo-container'>
          <img src={data.logo.default} alt='' />
        </div>
        <div className='job-desc-container'>
          <div className='desc-top'>
            <div className='name'>{data.company}</div>
            {data.new && <div className='new'>NEW!</div>}
            {data.featured && <div className='feature'>FEATURED</div>}
          </div>
          <div className='desc-pos'>
            <h2>{data.position}</h2>
          </div>
          <div className='desc-bottom'>
            <div className='timestamp'>{data.postedAt}</div>
            <div className='dot'></div>
            <div className='duration'>{data.contract}</div>
            <div className='dot'></div>
            <div className='location'>{data.location}</div>
          </div>
        </div>
        <div className='job-cats'>
          <div className='cats-container'>
            <div
              onClick={(e) => {
                handleClick(e);
              }}
              className='cat'
            >
              {data.role}
            </div>
            <div
              onClick={(e) => {
                handleClick(e);
              }}
              className='cat'
            >
              {data.level}
            </div>
            {data.languages.map((i) => {
              return (
                <div
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  key={i}
                  className='cat'
                >
                  {i}
                </div>
              );
            })}
            {data.tools.map((i) => {
              return (
                <div
                  onClick={(e) => {
                    handleClick(e);
                  }}
                  key={i}
                  className='cat'
                >
                  {i}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
