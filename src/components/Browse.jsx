import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import BrowseIFrame from './BrowseIFrame';
import BrowseCarousel from './BrowseCarousel';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <BrowseIFrame/>
      <BrowseCarousel/>
    </div>
  )
}

export default Browse;