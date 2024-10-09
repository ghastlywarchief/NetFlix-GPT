import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const BrowseCarousel = () => {

    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
    const popularMovies = useSelector(store => store.movies?.popularMovies);
    const topRatedMovies = useSelector(store => store.movies?.topRatedMovies);
    const upcomingMovies = useSelector(store => store.movies?.upcomingMovies);

  return (
    <div className='bg-black absolute z-40 px-4 '>
        <div className='-mt-[20%]'>
            <h1 className='text-4xl text-white py-8'>Now Playing</h1>
            <div className='flex overflow-x-scroll'>
                {(nowPlayingMovies) && nowPlayingMovies.map((item) => <MovieCard key={item.id} poster_path={item.poster_path} />)}
            </div>
        </div>       
        <div className=''>
            <h1 className='text-4xl text-white py-8'>Popular</h1>
            <div className='flex overflow-x-scroll'>
                {(popularMovies) && popularMovies.map((item) => <MovieCard key={item.id} poster_path={item.poster_path} />)}
            </div>
        </div>
        <div className=''>
            <h1 className='text-4xl text-white py-8'>Top Rated</h1>
            <div className='flex overflow-x-scroll'>
                {(topRatedMovies) && topRatedMovies.map((item) => <MovieCard key={item.id} poster_path={item.poster_path} />)}
            </div>
        </div> 
        <div className=''>
            <h1 className='text-4xl text-white py-8'>Upcoming</h1>
            <div className='flex overflow-x-scroll'>
                {(upcomingMovies) && upcomingMovies.map((item) => <MovieCard key={item.id} poster_path={item.poster_path} />)}
            </div>
        </div> 
    </div>
  )
}

export default BrowseCarousel