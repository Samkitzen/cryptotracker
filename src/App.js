import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Coin from './Coin';
import './Coin.css'


function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    axios.get(process.env.REACT_APP_API_URL)
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(err => {
        alert("Some Error Occurred in API");
      })

  }, [])

  const handleChange = e => {
    console.log(e.target.value);
    setSearch(e.target.value);

  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search For Any Crypto Currency</h1>

        <form>
          <input type="text" placeholder='Search' className='coin-input' onChange={handleChange} />
        </form>

      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} coindata={coin} />
        )
      })}
    </div>
  );
}

export default App;
