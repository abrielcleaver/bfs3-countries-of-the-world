import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [continent, setContinents] = useState(['All']);
  const [query, setQuery] = useState(['']);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
    });
  }
  if (loading) return <h1>Please wait....</h1>;
  return (
    <div className="App">
      <h1>Countries of the World</h1>
      <input
        placeholder="Search Countries"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={continent} onChange={(e) => setContinents(e.target.value)}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="">South America</option>
      </select>

      {filterCountries().map((c) => (
        <p key={c.id}>
          <img src={`https://flagcdn.com/16x12/${c.iso2.toLowerCase()}.png`} />
          {c.name}
        </p>
      ))}
    </div>
  );
}

export default App;
