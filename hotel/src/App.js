import React, { useState, useEffect } from "react";
import LoadingMask from './components/LoadingMask';
import Hotel from './components/Hotel';
import Subscription from './components/Subscription';
import './App.css';

const App = () => {
  const [isLoadingHotels, setIsLoadingHotels] = useState(false);
  const [hotels, setHotels] = useState([])
  const [formShown, setFormShown] = useState(false)

  useEffect(() => {
    setIsLoadingHotels(true)
    fetch("api/hotels")
      .then(res => res.json())
      .then(data => setHotels(data))
      .catch(err => setHotels(null))
      .finally(() => setIsLoadingHotels(false))
  }, [])

  useEffect(() => {
    setTimeout(() => setFormShown(true), 5000)
  }, [])

  return (
    <div>
      {
        isLoadingHotels && <LoadingMask />
      }
      {
        hotels ? hotels.map(hotel => <Hotel key={hotel.name} name={hotel.name} stars={hotel.stars} city={hotel.city} />) :
          <p>Oops, something happened</p>
      }
      {
        formShown && <Subscription close={() => setFormShown(false)} />
      }
    </div>
  )
};

export default App
