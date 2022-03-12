import React, { useContext, useEffect, useState } from "react";
import { Job } from "./Job";
import { all } from "../data";
import { CatContext } from "../App";

export const Jobs = () => {
  const [data, setData] = useState([...all]);
  const { cats } = useContext(CatContext);

  useEffect(() => {
    if (cats.length > 0) {
      setData(
        data.filter((item) => {
          return cats.every((cat) => {
            return [
              item.role,
              item.level,
              ...item.tools,
              ...item.languages,
            ].includes(cat);
          });
        })
      );
    } else {
      setData([...all]);
    }
  }, [cats, data]);

  return (
    <div className='jobs'>
      {data.length > 0 &&
        data.map((item) => {
          return <Job key={item.id} data={item} />;
        })}
    </div>
  );
};
