import { M_PLUS_1 } from "next/font/google";
import styles from "./page.module.css"; const Equipos = ({ equipos }) => { return (
        <div className={styles.container__list}>
        <h2 className={styles.title}>Equipos de Fútbol</h2>
    {equipos.map((equipo) => (
     <div key={equipo.id}>
     <h3 className={styles.nameclub}>{equipo.nombre}</h3>
   <ul >
   {equipo.plantilla.map((jugador) => (
   <li className={styles.container__list} key={jugador.id}>
   <strong>{jugador.nombre}</strong>
   <p>Altura: {jugador.Altura}m <br></br> Peso:
  {jugador.Peso}Kg</p>
     </li>
      ))}
     </ul>
    </div>
   ))}
 </div>
  );
  }; 

  export default function Home(){
    const equiposData = [
      {"id": 1, "nombre": "Real Madrid", "plantilla": [{"id": 1, "nombre": "Eden Hazard", "Altura": "1.75", "Peso": "74"}, {"id": 2, "nombre": "Gonzalo", "Altura": "1.82", "Peso": "74kg"},
        {"id": 3, "nombre": "Karim Benzema", "Altura": "1.85", "Peso": "81kg"}]},
        {"id": 2, "nombre": "Barcelona", "plantilla": [{"id": 1, "nombre": "Marc-André ter Stegen", "Altura": "1.75", "Peso": "74kg"}, {"id": 2, "nombre": "Iñigo Martinez", "Altura": "1.82", "Peso": "74kg"}, 
          {"id": 3, "nombre": "Gavi", "Altura": "1.85", "Peso": "81kg"}]}
    ];

    return(
      <main className ={styles.main}>
        <div>
          <h1>Mi aplicacion de Futbol</h1>
          <Equipos equipos={equiposData}/>
        </div>
      </main>
    )
  }