import "./App.css";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import { useState } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [form, setForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchedProd, setSearchedProd] = useState("");

  return (
    <div className="App">
      <Navigation setForm={setForm} fun={setSearchedProd} />
      <Form
        form={form}
        setForm={setForm}
        setProducts={setProducts}
        products={products}
      />

      <div className="topic">
        <h1>Electronics</h1>
        <p>All Products</p>
      </div>
      <div className="display-container">
        {products.length > 0 ? (
          products
            .filter((item) => {
              if (searchedProd === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchedProd.toLowerCase()) ||
                item.categ.toLowerCase().includes(searchedProd.toLowerCase())
              ) {
                return item;
              }
            })
            .map((e) => {
              return (
                <Products
                  title={e.title}
                  price={e.price}
                  qty={e.qty}
                  url={e.imgurl}
                />
              );
            })
        ) : (
          <h1 id="no-prod">
            No <span style={{ color: "#e63841" }}>Products</span> Found...
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
