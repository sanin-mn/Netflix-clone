import React, { useEffect, useState } from 'react'
import './Banner.css'
import tmdbAxiosInstance from '../instance'


function Banner({ fetchUrl }) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie, setMovie] = useState({})
    const fetchData = async () => {
        const { data } = await tmdbAxiosInstance.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random() * data.results.length)])
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div style={{
            height: '600px',width:'100%', backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
            backgroundSize: 'cover', backgroundAttachment: 'fixed'
        }}>
            <div className="banner-content">
                <h1>{movie?.name}</h1>
                <h2>{movie?.overview?.slice(0,250)}...</h2>
            </div>

        </div>
    )
}

export default Banner