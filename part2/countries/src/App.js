import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        setErrorMessage("Failed to fetch countries data");
      });
  }, []);

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleShowCountryDetails = countryCode => {
    setSearchTerm(countryCode);
  };

  let resultsToShow;

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    resultsToShow = (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km²</p>
        <p>Languages: {Object.values(country.languages).join(", ")}</p>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} width="100" />
      </div>
    );
  } else if (filteredCountries.length > 10) {
    resultsToShow = <p>Too many matches, please specify another filter</p>;
  } else {
    resultsToShow = filteredCountries.map(country => (
      <div key={country.cca2}>
        <h2>
          {country.name.common}{" "}
          {filteredCountries.length > 1 && (
            <button onClick={() => handleShowCountryDetails(country.cca3)}>Show</button>
          )}
        </h2>
      </div>
    ));
  }

  return (
    <div>
      <h1>Country Info</h1>
      <label>
        Search country:
        <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      </label>
      {errorMessage && <p>{errorMessage}</p>}
      {resultsToShow}
    </div>
  );
}

export default App;