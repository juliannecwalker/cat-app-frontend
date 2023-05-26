import Cat from './components/cat/Cat';
import Home from './components/home/Home';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Redirect} from 'react-router';
import {useState, useEffect} from 'react';
import api from './api/axiosConfig';

function App() {
  // cats will store cats retunred from the API
  const [cats, setCats] = useState();
  const [cat, setCat] = useState();

  const getCats = async () => {
    try {
      // '/cats' will be appended to axios baseURL
      const response = await api.get("/cats");
      setCats(response.data);
    } catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getCats();
  }, [])
  return (
    <>
        <Routes>
          <Route path="/cats/" element={<Home cats={cats}/>} />
          <Route path="/cats/:name" element={<Cat />}/>
        </Routes>
    </>
  );
}

export default App;
