import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    const res = await fetch("https://reqres.in/api/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const result = await res.json();
    console.log("data is", result);
    setData(result.data);
  };

  useEffect(() => {
    getData();
    console.log("data issss", data);
  }, []);

  if (!data) {
    return <h1>loading...</h1>;
  } else {
    return (
      <>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-row span-col-2"
              style={{ display: "grid", gridTemplateColumns: "100px 100px" }}
            >
              <Link to={`profile/:${item.id}`}>
                <img
                  src={item.avatar}
                  alt=""
                  style={{ padding: "20px", cursor: "pointer" }}
                />
              </Link>
              <div
                style={{ padding: "20px", marginLeft: "50px", color: "black" }}
              >
                <p>{item.first_name}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};
