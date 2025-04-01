"use client"
import React from 'react';
import styles from '../app/page.module.css';

const ShoppingItem = ({ item, index, deleteItem }) => {
  const subtotal = (parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2);

  return (
    <div className={styles.list}>
      <h3 className={styles.Titulo3}>
        {item.name} - {item.brand} - Cantidad: {item.quantity} - Precio: ${item.price} - Subtotal: ${subtotal}
      </h3>
      <button onClick={() => deleteItem(index)} className={styles.btn_delete}>
        X
      </button>
    </div>
  );
};

export default ShoppingItem;