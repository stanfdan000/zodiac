import './ZodiacCard.css';


{/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
export default function ZodiacCard({ name, dates }) {
  console.log(name, dates);
  return (
    <div className='zodiacCard'>
      <img alt={name} src={`/images/${name}.png`} />
      <span className='name'>{name}</span>
      <span>{dates}</span>
    </div>
  );
}
