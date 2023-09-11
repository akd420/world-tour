import { useState } from "react";
import "./country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const { name, flags, capital, cca3 } = country;
  // console.log(name?.nativeName?.nep?.common);
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited && "visited"}`}>
      <h4>Name: {name?.common}</h4>
      <h4>Capital: {capital}</h4>
      <h4>Native Name : {name?.nativeName?.nep?.common}</h4>
      <h4>Codee: {cca3}</h4>
      <img src={flags.png} alt="" />
      <button
        onClick={() => {
          handleVisited();
          handleVisitedCountries(country);
          handleVisitedFlags(country.flags.png);
        }}
      >
        {visited ? "Visited" : "Visit"}
      </button>
      <br />
      {visited ? "I have visited this country" : "Not visited yet"}
    </div>
  );
};

export default Country;
