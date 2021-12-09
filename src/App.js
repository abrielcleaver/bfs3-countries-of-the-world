import { useState, useEffect } from 'react';
import { getCountries } from './services/countries';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Please wait....</h1>;
  return (
    <div className="App">
      <h1>Countries of the World</h1>
      {countries.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  );
}

export default App;
