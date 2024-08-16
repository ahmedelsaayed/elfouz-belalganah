import React, { useEffect, useState } from 'react';
import "./Ahades.css";
import img1 from "../../images/2.jpg";
import img3 from "../../images/4.jpg";
import img4 from "../../images/5.jpg";
import img5 from "../../images/6.jpg";
import img6 from "../../images/7.jpg";
import img7 from "../../images/8.jpg";
import img8 from "../../images/9.jpg";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Ahades = () => {


    const [data , setData] = useState([]);
    async function getHades(){
        const response = await axios.get(`https://hadis-api-id.vercel.app/hadith`);
        setData(response.data)
        
     }
     useEffect(()=>{
        getHades();
     },[])



  return (
    <div className="ahadess">
        <h1>اختر القسم الذى تريده</h1>
        <div className='ahades'>
        {data.map((hades)=>{
            return(
            <div className="hades"> 
                <Link to={`/singlehades/${hades.slug}`} className='link'>
                <h2>{hades.name}</h2>
                </Link>
            </div>
            )
        })}
       
        
        
      
    </div>
    </div>
  );
}

export default Ahades;
