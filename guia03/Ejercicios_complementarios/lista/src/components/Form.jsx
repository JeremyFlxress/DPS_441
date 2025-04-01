"use client"
import React, { useState } from 'react';
import ShoppingItem from './ShopingItem';
import styles from '../app/page.module.css';

const Form = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    name: '',
    brand: '',
    quantity: '',
    price: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setItem(prevItem => ({
      ...prevItem,
      [name]: value
    }));
  };

  const handleClick = e => {
    e.preventDefault();
    if (item.name && item.brand && item.quantity && item.price) {
      setItems(prevItems => [...prevItems, item]);
      setItem({ name: '', brand: '', quantity: '', price: '' }); // Reset form
    }
  };

  const deleteItem = index => {
    setItems(prevItems => prevItems.filter((item, i) => i !== index));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + (parseFloat(item.price) * parseFloat(item.quantity));
    }, 0).toFixed(2);
  };

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={item.name}
          onChange={handleChange}
          className={styles.form_input}
        />
        <input
          type="text"
          name="brand"
          placeholder="Marca"
          value={item.brand}
          onChange={handleChange}
          className={styles.form_input}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Cantidad"
          value={item.quantity}
          onChange={handleChange}
          className={styles.form_input}
        />
        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={item.price}
          onChange={handleChange}
          className={styles.form_input}
          step="0.01"
        />
        <button onClick={handleClick} className={styles.form_button}>
          Agregar Producto
        </button>
      </form>

      <div>
        <h2>Lista de Compras</h2>
        {items.map((item, index) => (
          <ShoppingItem
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
          />
        ))}
      </div>

      <div>
        <h3>Total de la Compra: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};


export default Form;