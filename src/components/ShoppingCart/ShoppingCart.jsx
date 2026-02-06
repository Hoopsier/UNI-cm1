import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: "",
    brand: "",
    subtotal: "",
    tax: "",
    availability: "In stock",
  });

  // read and update
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  // Add item Functio
  function addItem() {
    if (
      newItem.itemName.trim() !== "" &&
      newItem.quantity.trim() !== "" &&
      newItem.brand.trim() !== "" &&
      newItem.subtotal.trim() !== "" &&
      newItem.tax.trim() !== "" &&
      newItem.availability.trim() !== ""
    ) {
      setItems((i) => [...i, newItem]);
      setNewItem({
        itemName: "",
        quantity: "",
        brand: "",
        subtotal: "",
        tax: "",
        availability: "",
      });
    }
  }

  // delte functio 
  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div>
        {/* item Name */}
        <input
          type="text"
          placeholder="Enter item name..."
          name="itemName"
          value={newItem.itemName}
          onChange={handleInputChange}
        />

        {/* item quantity */}
        <input
          type="number"
          placeholder="Enter quantity..."
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        {/*item brand */}
        <input
          type="text"
          placeholder="Enter brand..."
          name="brand"
          value={newItem.brand}
          onChange={handleInputChange}
        />
        {/*  item subtotal*/}
        <input
          type="number"
          placeholder="Enter subtotal..."
          name="subtotal"
          value={newItem.subtotal}
          onChange={handleInputChange}
        />
        {/* item tax */}
        <input
          type="number"
          placeholder="Enter tax..."
          name="tax"
          value={newItem.tax}
          onChange={handleInputChange}
        />
        {/*item  availability */}

        <select
          type="text"
          placeholder="Enter availability..."
          name="availability"
          value={newItem.availability}
          onChange={handleInputChange}
        >
          <option value="In stock">In stock</option>
          <option value="out of stock">out of stock</option>
        </select>

        {/* Add button */}
        <button onClick={addItem}>Add Item</button>
      </div>
      {/* Delte */}
      <ol className="itemShelf">

      {/* in this section we will display a data usign map from items*/}
        {items.map((item, index) => (
          <li key={index}>
            <div className="items">
              <h3 className="itemData">
                Name: <span className="item">{item.itemName}</span>
              </h3>
              <h3 className="itemData">
                Quantity: <span className="item">{item.quantity}</span>
              </h3>
              <h3 className="itemData">
                Brand: <span className="item">{item.brand}</span>
              </h3>
              <h3 className="itemData">
                Subtotal: <span className="item">{item.subtotal}</span>
              </h3>
              <h3 className="itemData">
                Tax: <span className="item">{item.tax}</span>
              </h3>
              <h3 className="itemData">
                Availability: <span className="item">{item.availability}</span>
              </h3>
              <button className="itemButton" onClick={() => deleteItem(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;
