import React, { useEffect, useState } from 'react';
import "./SingleQuran.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
const SingleQuran = () => {
   
   const {number} = useParams();
    const [data,setData] = useState([]);
    async function getQuran(){
    const response = await axios.get(`https://api.alquran.cloud/v1/surah/${number}`);  
    setData(response.data.data.ayahs);
    }
    



    const [audio, setAudio] = useState([]);
    async function getAudio(){
        const response = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/14/${number}`);
        setAudio(response.data.audio_file.audio_url);
    }


    


    useEffect(()=>{
        getQuran();
        getAudio()
      },[])

  return (
    <div className="ayaats">
        <div className='ayat'>
        <div className='start'>
        <h2>ابدا قراه السوره المختاره</h2>
        </div>
        <div className="audios">
                <audio src={audio} controls/>
        </div>
        <div className="ayaat">
        {data.map((aya) =>{
            return(
                <>
                <div className="aya">
                    <h2>{`(${aya.numberInSurah})${aya.text}`}</h2>
                </div>
                </>
            )
        })}
        </div>
    </div>
    </div>
  );
}

export default SingleQuran;
