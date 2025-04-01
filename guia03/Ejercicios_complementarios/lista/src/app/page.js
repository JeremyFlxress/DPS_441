"use client"
import styles from "./page.module.css";
import Form from "../components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <h1>Gestión de Lista de Compras</h1>
        <Form />
      </div>
    </main>
  );
}