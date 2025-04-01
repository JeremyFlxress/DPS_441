"use client";

import { useState } from 'react';

const ConversorTemperatura = () => {
  const [temperatura, setTemperatura] = useState('');
  const [tipoConversion, setTipoConversion] = useState('CaF');
  const [resultado, setResultado] = useState('');

  const convertirTemperatura = () => {
    const temp = parseFloat(temperatura);
    if (isNaN(temp)) {
      setResultado('Por favor, ingrese un número válido');
      return;
    }

    if (tipoConversion === 'CaF') {
      setResultado(`${((temp * 9/5) + 32).toFixed(1)} °F`);
    } else {
      setResultado(`${((temp - 32) * 5/9).toFixed(1)} °C`);
    }
  };

  return (
    <div className="conversor-temperatura" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Conversor de Temperatura</h1>
        <input
          type="text"
          value={temperatura}
          onChange={(e) => setTemperatura(e.target.value)}
          placeholder="Ingrese temperatura"
          style={{ display: 'block', margin: '10px auto' }}
        />
        <select
          value={tipoConversion}
          onChange={(e) => setTipoConversion(e.target.value)}
          style={{ display: 'block', margin: '10px auto' }}
        >
          <option value="CaF">Celsius a Fahrenheit</option>
          <option value="FaC">Fahrenheit a Celsius</option>
        </select>
        <button onClick={convertirTemperatura} style={{ display: 'block', margin: '10px auto' }}>
          Convertir
        </button>
        {resultado && <p style={{ textAlign: 'center' }}>Resultado: {resultado}</p>}
      </div>
    </div>
  );
};

export default ConversorTemperatura;