"use client";

import { useState } from 'react';

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [loginExitoso, setLoginExitoso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (usuario === 'admin' && password === '123456') {
      setLoginExitoso(true);
      setMensaje(`¡Bienvenido ${usuario}!`);
    } else {
      setLoginExitoso(false);
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <main style={{
      display: 'flex',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '300px',
        padding: '20px',
        textAlign: 'center'
      }}>
        {!loginExitoso ? (
          <form onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '20px' }}>Iniciar Sesión</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuario"
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '10px'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '10px'
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '8px',
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Iniciar Sesión
            </button>

            {mensaje && !loginExitoso && (
              <p style={{ color: 'red', marginTop: '10px' }}>{mensaje}</p>
            )}
          </form>
        ) : (
          <div>
            <p style={{ color: 'green', fontSize: '1.5em' }}>{mensaje}</p>
            <button
              onClick={() => {
                setLoginExitoso(false);
                setUsuario('');
                setPassword('');
                setMensaje('');
              }}
              style={{
                marginTop: '15px',
                padding: '8px 20px',
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default LoginForm;