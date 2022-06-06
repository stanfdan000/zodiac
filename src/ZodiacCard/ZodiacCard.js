import './ZodiacCard.css';



export default function ZodiacCard({ name, dates }) {
  return (
    <div className='zodiacCard'>
      <img alt={name} src={`/images/${name}.png`} />
      <span className='name'>{name}</span>
      <span>{dates}</span>
    </div>
  );
}
