const StarshipCard = ({ starship }) => {
    return (
      <div>
        <h3>{starship.name}</h3>
        <p className="pCard">Class: {starship.starship_class}</p>
        <p className="pCard">Manufacturer: {starship.manufacturer}</p>
        <p className="pCard">Model: {starship.model}</p>
      </div>
    );
  };
  
  export default StarshipCard;