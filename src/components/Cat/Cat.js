import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import api from '../../api/axiosConfig';
import defaultImage from '../../resources/peach.jpeg';
import './Cat.css'

export const Cat = () => {
  const params = useParams();
  const catName = params.name;
	const [cat, setCat] = useState({});

  //Using hardcoded default image for now
  const [image, setImage] = useState({});
  
  const getCatData = async (catName) => {
    try{
      const response = await api.get(`/cats/${catName}`);
      const singleCat = response.data;
      setImage(response.data.image.data);
      setCat(singleCat);
    }
    catch(err){
      console.log(err);
    }
  }
  
  useEffect(() => {
    getCatData(catName);
  }, [])

  return (
    <div>
     <h1>{cat.name}</h1>
     <h2>{cat.description}</h2>
     <img src={defaultImage} alt="IMAGE" className="image"/>
    </div>
  )
}

export default Cat
