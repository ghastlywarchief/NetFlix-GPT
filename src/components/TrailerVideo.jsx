import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from 'react-redux';

const TrailerVideo = ({id}) => {

    useTrailerVideo(id);
    const trailer = useSelector(store=>store.movies?.trailerVideo);

    if(!trailer) return;

    console.log(trailer.key);

  return (
    <div>
        <iframe className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/"+ trailer?.key +"?loop=1&autoplay=1&mute=1&si=r-YviPJmryct7LO5"}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default TrailerVideo