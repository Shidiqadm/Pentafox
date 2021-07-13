import { React, useState } from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Form, Button } from "react-bootstrap";

function Navigation(props) {
  const [search, setSearch] = useState();

  return (
    <div className="nav-container">
      <a href="#">
        <h1>
          <span id="logo-color">Swap</span>Store
        </h1>
      </a>
      <div className="search-container">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.charCode === 13) {
                props.fun(search);
                e.preventDefault();
              } else {
                return;
              }
            }}
          />
          <Button variant="outline-success" onClick={() => props.fun(search)}>
            Search
          </Button>
        </Form>
      </div>
      <button className="add-btn" onClick={() => props.setForm(true)}>
        Add Product
      </button>
    </div>
  );
}

export default Navigation;
