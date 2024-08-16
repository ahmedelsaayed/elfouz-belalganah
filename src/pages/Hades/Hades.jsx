import React, { useEffect, useState } from 'react';
import "./Hades.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Hades = () => {
    const [data , setData] = useState([]);
    const {id} = useParams();
    async function getHades(){
        const response = await axios.get(`https://hadis-api-id.vercel.app/hadith/${id}`);
        setData(response.data.items)
        
        
     }
     useEffect(()=>{
        getHades();
     },[])




  




  return (
    <div className='hadess'>
      <h2>الاحاديث الشريفه</h2>
        {data.map((hades)=>{
            return(
                
                    
                    <div className="hade">
                    <h3>{hades.arab}</h3>
                    </div>
                    
                
            )
        })}
    </div>
  );
}

export default Hades;
