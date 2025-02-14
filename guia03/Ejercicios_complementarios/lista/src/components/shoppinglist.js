"use client";
import React, { useState } from "react";
import ProductItem from "./ShopingItem";
import styles from "../app/page.module.css";

const ShoppingList = () => {
  const [product, setProduct] = useState({ name: "", brand: "", quantity: 1, price: "" });
  const [products, setProducts] = useState([]);
  
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!product.name || !product.brand || !product.quantity || !product.price) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    setProducts([...products, { ...product, price: parseFloat(product.price), quantity: parseInt(product.quantity) }]);
    setProduct({ name: "", brand: "", quantity: 1, price: "" });
  };

  const handleDelete = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const handleEdit = (index, updatedProduct) => {
    const newProducts = products.map((item, i) => (i === index ? updatedProduct : item));
    setProducts(newProducts);
  };

  const totalPrice = products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <h2>Lista de Compras</h2>
      <div className={styles.form_group}>
        <input type="text" name="name" placeholder="Producto" value={product.name} onChange={handleChange} />
        <input type="text" name="brand" placeholder="Marca" value={product.brand} onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Cantidad" min="1" value={product.quantity} onChange={handleChange} />
        <input type="number" name="price" placeholder="Precio" min="0" step="0.01" value={product.price} onChange={handleChange} />
        <button onClick={handleAddProduct}>Agregar</button>
      </div>
      
      <div className={styles.list}>
        {products.map((item, index) => (
          <ProductItem key={index} index={index} product={item} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingList;
