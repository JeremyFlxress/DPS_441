
"use client"
import React from 'react';
import LanguageCard from './components/lenguagecard';
import languagesData from './package.json';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Lenguajes de Programación</h1>
      <div className={styles.grid}>
        {languagesData.languages.map(language => (
          <LanguageCard key={language.id} language={language} />
        ))}
      </div>
    </main>
  );
}