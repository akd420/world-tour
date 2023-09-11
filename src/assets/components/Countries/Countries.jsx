import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h3>Visited Countries: {visitedCountries.length}</h3>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
        <div>
          {
            visitedFlags.map((flag,idx) => <img key={idx} style={{width:'100px'}} src={flag} alt="" />)
          }
        </div>
      </div>
      <div className="countries">
      {
        countries.map(country => <Country key={country.cca3} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>)
      }
      </div>
    </div>
  );
};

export default Countries;
