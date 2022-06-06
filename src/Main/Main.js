import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard';

export default function Main({ zodiac }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {zodiac.map((item, i) => (
        <ZodiacCard key={item.name + i } {...item} />
      ))}
    </main>
  );
}
