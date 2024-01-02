import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About'; // Import About component
import ContactForm from './Components/ContactForm'; // Import ContactForm
import Event from './Components/Events'; // Import Event component
import EventDetail from './Components/EventDetail'; // Import EventDetail
import LandingPage from './Components/LandingPage';
import MerchandiseList from './Components/MerchandiseList';
import SoundCloudWidget from './Components/SoundCloudPlayer';
import MixShowList from './Components/MixShowList';

function App() {
  const [djData, setDjData] = useState(null);
  const [mixes, setMixes] = useState([]);

  useEffect(() => {
    fetch("/api/dj-narcissist") // Adjusted endpoint to fetch data for DJ Narcissist
      .then(response => response.json())
      .then(data => {
        setDjData(data);
      })
      .catch(error => {
        console.error("Error fetching DJ data: ", error);
        setDjData(null); // In case of an error
      });
  
    fetch("/api/mix-shows")
        .then(response => response.json())
        .then(data => {
            setMixes(data);
          }).catch(error => {
            console.error("Error fetching data: ", error);
            setMixes(null); // In case of an error
  });
},[]);

  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path='/'element ={<LandingPage djData={djData}/> }/> 
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<ContactForm />}/>
        <Route path="/events" element={<Event />}/>
        <Route path="/event/:id" element={<EventDetail />}/>
        <Route path="/music" element={<MixShowList mixes={mixes}/>} />
        <Route path='/merchandise' element={<MerchandiseList/>}/> 
        
        {/* Add other routes as needed */}
      </Routes>
      <SoundCloudWidget />
      <Footer/>
    </Router>
  );
}

export default App;
