"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');
  const validarInputs = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (isNaN(num1) || isNaN(num2)) {
      setError('Por favor, ingrese números válidos');
      setResultado(null);
      return null;
    }

    setError('');
    return { num1, num2 };
  };

  const sumar = () => {
    const inputs = validarInputs();
    if (inputs) {
      const resultadoSuma = inputs.num1 + inputs.num2;
      setResultado(`Resultado de la suma: ${resultadoSuma}`);
    }
  };

  const restar = () => {
    const inputs = validarInputs();
    if (inputs) {
      const resultadoResta = inputs.num1 - inputs.num2;
      setResultado(`Resultado de la resta: ${resultadoResta}`);
    }
  };

  const multiplicar = () => {
    const inputs = validarInputs();
    if (inputs) {
      const resultadoMultiplicacion = inputs.num1 * inputs.num2;
      setResultado(`Resultado de la multiplicación: ${resultadoMultiplicacion}`);
    }
  };

  const dividir = () => {
    const inputs = validarInputs();
    if (inputs) {
      if (inputs.num2 === 0) {
        setError('Error: No se puede dividir por cero');
        setResultado(null);
        return;
      }
      const resultadoDivision = inputs.num1 / inputs.num2;
      setResultado(`Resultado de la división: ${resultadoDivision}`);
    }
  };

  const potencia = () => {
    const inputs = validarInputs();
    if (inputs) {
      const resultadoPotencia = Math.pow(inputs.num1, inputs.num2);
      setResultado(`Resultado de la potenciación: ${resultadoPotencia}`);
    }
  };

  const raizCuadrada = () => {
    const inputs = validarInputs();
    if (inputs) {
      if (inputs.num1 < 0) {
        setError('Error: No se puede calcular raíz cuadrada de número negativo');
        setResultado(null);
        return;
      }
      const resultadoRaiz = Math.sqrt(inputs.num1);
      setResultado(`Raíz cuadrada: ${resultadoRaiz}`);
    }
  };

  const reiniciar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
    setError('');
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <h1 className={styles.titulo}>Calculadora</h1>
        
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input 
            className={styles.inputnum} 
            type="number" 
            value={numero1} 
            onChange={(e) => setNumero1(e.target.value)} 
            placeholder="Ingrese primer número"
          />
        </div>
        
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input 
            className={styles.inputnum} 
            type="number" 
            value={numero2} 
            onChange={(e) => setNumero2(e.target.value)} 
            placeholder="Ingrese segundo número"
          />
        </div>
        
        <div className={styles.botones}>
          <button className={styles.button} onClick={sumar}>Sumar (+)</button>
          <button className={styles.button} onClick={restar}>Restar (-)</button>
          <button className={styles.button} onClick={multiplicar}>Multiplicar (×)</button>
          <button className={styles.button} onClick={dividir}>Dividir (÷)</button>
          <button className={styles.button} onClick={potencia}>Potencia (^)</button>
          <button className={styles.button} onClick={raizCuadrada}>Raíz Cuadrada (√)</button>
          <button className={styles.buttonReset} onClick={reiniciar}>Reiniciar</button>
        </div>
        
        {error && <div className={styles.error}>{error}</div>}
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}