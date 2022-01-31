import axios from "axios";
import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setListOfUSer(res.data))
      .catch((e) => console.error(e));
  }, []);

  console.log(listOfUSer);

  return (
    <>
      <h2
        style={{
          margin: "2%",
          fontWeight: "bold",
          fontSize: 40,
          color: "red",
          textDecoration: "underline",
        }}
      >
        Users List
      </h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {listOfUSer.map((el, index) => (
          <div
            key={index}
            className="card bg-light text-whit mb-3"
            style={{
              maxWidth: "18rem",
              margin: "2%",
            }}
          >
            <h5 className="card-header" style={{ fontWeight: "bold" }}>
              {el.name}
            </h5>
            <div className="card-body" style={{ textAlign: "left" }}>
              <p className="card-text">Username: {el.username}</p>
              <p className="card-text">Company : {el.company.name}</p>
              <p className="card-text">Address : {el.address.street}</p>
              <p className="card-text">Phone : {el.phone}</p>
              <p className="card-text">Website : {el.website}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
