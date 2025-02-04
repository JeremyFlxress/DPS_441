import Image from 'next/image';
import styles from "./page.module.css";

const PlayerCard = ({ jugador }) => {
  return (
    <div className={styles.player__card}>
      <div className={styles.player__image__container}>
        <Image 
          src={jugador.foto} 
          alt={jugador.nombre} 
          width={200} 
          height={250} 
          className={styles.player__image}
          objectFit="cover"
        />
      </div>
      <div className={styles.player__info}>
        <h4 className={styles.player__name}>{jugador.nombre}</h4>
        <div className={styles.player__details}>
          <p>Altura: {jugador.Altura}m</p>
          <p>Peso: {jugador.Peso}kg</p>
          <p>Posición: {jugador.Posicion}</p>
        </div>
      </div>
    </div>
  );
};

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.teams__container}>
      <h2 className={styles.main__title}>Equipos de Fútbol</h2>
      <div className={styles.teams__grid}>
        {equipos.map((equipo) => (
          <div key={equipo.id} className={styles.team__section}>
            <h3 className={styles.team__name}>{equipo.nombre}</h3>
            <div className={styles.players__grid}>
              {equipo.plantilla.map((jugador) => (
                <PlayerCard key={jugador.id} jugador={jugador} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      "id": 1, 
      "nombre": "Real Madrid", 
      "plantilla": [
        {
          "id": 1, 
          "nombre": "Eden Hazard", 
          "Altura": "1.75", 
          "Peso": "74",
          "Posicion": "Extremo",
          "foto": "/hazard.jpg"
        }, 
        {
          "id": 2, 
          "nombre": "Karim Benzema", 
          "Altura": "1.85", 
          "Peso": "81",
          "Posicion": "Delantero",
          "foto": "/benzema.jpg"
        },
        {
          "id": 3, 
          "nombre": "Luka Modric", 
          "Altura": "1.72", 
          "Peso": "66",
          "Posicion": "Mediocampista",
          "foto": "/modric.jpg"
        }
      ]
    },
    {
      "id": 2, 
      "nombre": "Barcelona", 
      "plantilla": [
        {
          "id": 1, 
          "nombre": "Marc-André ter Stegen", 
          "Altura": "1.87", 
          "Peso": "85",
          "Posicion": "Portero",
          "foto": "/stegen.jpg"
        }, 
        {
          "id": 2, 
          "nombre": "Pedri", 
          "Altura": "1.74", 
          "Peso": "68",
          "Posicion": "Mediocampista",
          "foto": "/pedri.jpg"
        },
        {
          "id": 3, 
          "nombre": "Robert Lewandowski", 
          "Altura": "1.85", 
          "Peso": "81",
          "Posicion": "Delantero",
          "foto": "/lewan.jpg"
        }
      ]
    },
    {
      "id": 3,
      "nombre": "Milan",
      "plantilla": [
        {
          "id": 1, 
          "nombre": "Zlatan Ibrahimović", 
          "Altura": "1.95", 
          "Peso": "95",
          "Posicion": "Delantero",
          "foto": "/zlatan.jpg"
        }, 
        {
          "id": 2, 
          "nombre": "Theo Hernández", 
          "Altura": "1.84", 
          "Peso": "78",
          "Posicion": "Defensa",
          "foto": "/theo.jpg"
        },
        {
          "id": 3, 
          "nombre": "Sandro Tonali", 
          "Altura": "1.82", 
          "Peso": "79",
          "Posicion": "Mediocampista",
          "foto": "/ultimo.jpg"
        }
      ]
    },
    {
      "id": 4,
      "nombre": "Inter de Milan",
      "plantilla": [
        {
          "id": 1, 
          "nombre": "Samir Handanović", 
          "Altura": "1.93", 
          "Peso": "92",
          "Posicion": "Portero",
          "foto": "/inter1.jpg"
        }, 
        {
          "id": 2, 
          "nombre": "Milan Škriniar", 
          "Altura": "1.88", 
          "Peso": "80",
          "Posicion": "Defensa",
          "foto": "/inter2.jpg"
        },
        {
          "id": 3, 
          "nombre": "Lautaro Martínez", 
          "Altura": "1.74", 
          "Peso": "72",
          "Posicion": "Delantero",
          "foto": "/lau.jpg"
        }
      ]
    }


  ];

  return (
    <main className={styles.main}>
      <div className={styles.content__wrapper}>
        <Equipos equipos={equiposData}/>
      </div>
    </main>
  );
}