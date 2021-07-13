import { React, useState } from "react";
import "./Form.css";
import { Button, FormControl } from "react-bootstrap";
import Modal from "react-modal";

function Form(props) {
  const [prodValue, setProdValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [prodCateg, setProdCateg] = useState("");
  const [qtyValue, setQtyValue] = useState("");
  const [urlValue, seturlValue] = useState("");

  function submit() {
    if (
      (!prodValue == 0) &
      (!priceValue == 0) &
      (!prodCateg == 0) &
      (!qtyValue == 0) &
      (!urlValue == 0)
    ) {
      props.setProducts((prevItems) => {
        return [
          ...prevItems,
          {
            title: prodValue,
            price: priceValue,
            categ: prodCateg,
            qty: qtyValue,
            imgurl: urlValue,
          },
        ];
      });
    }

    setProdValue("");
    setPriceValue("");
    setProdCateg("");
    setQtyValue("");
    seturlValue("");
    props.setForm(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "30%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      boxShadow:
        "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
    },
  };

  return (
    <>
      <Modal isOpen={props.form} style={customStyles}>
        <div className="input-container">
          <p>Product Name</p>
          <FormControl
            type="text"
            placeholder="Title"
            className="mr-2"
            value={prodValue}
            onChange={(e) => {
              setProdValue(e.target.value);
              //   console.log(prodValue);
            }}
          />
        </div>

        <div className="input-container">
          <p>Product Price</p>
          <FormControl
            type="number"
            placeholder="Set Price"
            className="mr-2"
            value={priceValue}
            onChange={(e) => {
              setPriceValue(e.target.value);
              //   console.log(priceValue);
            }}
          ></FormControl>
        </div>

        <div className="input-container">
          <p>Product Category</p>
          <FormControl
            type="text"
            placeholder="Category"
            className="mr-2"
            value={prodCateg}
            onChange={(e) => {
              setProdCateg(e.target.value);
              //   console.log(prodValue);
            }}
          />
        </div>

        <div className="input-container">
          <p>Product Quantity</p>
          <FormControl
            type="number"
            placeholder="quantity"
            className="mr-2"
            value={qtyValue}
            onChange={(e) => {
              setQtyValue(e.target.value);
              //   console.log(qtyValue);
            }}
          />
        </div>

        <div className="input-container">
          <p>Image URL</p>
          <FormControl
            type="link"
            placeholder="Link"
            className="mr-2"
            value={urlValue}
            onChange={(e) => {
              seturlValue(e.target.value);
              //   console.log(urlValue);
            }}

            onKeyPress={(e) => {
              if (e.charCode === 13) {
                submit();
                e.preventDefault();
              } else {
                return;
              }
            }}
          />
        </div>

        <div className="btns-container">
          <Button
            variant="danger"
            style={{ margin: "10px" }}
            onClick={() => props.setForm(false)}
          >
            Close
          </Button>
          <Button variant="primary" style={{ margin: "10px" }} onClick={submit}>
            Add Product
          </Button>
        </div>
      </Modal>

      {/* <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Add Product</Button>
        </Modal.Footer>
      </Modal.Dialog> */}
    </>
    // <div className="form-container">
    //     <h1 className="title">Add Product</h1>
    // </div>
  );
}

export default Form;
