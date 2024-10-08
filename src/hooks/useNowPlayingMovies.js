import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const favouriteMovies = async () => {
        const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
        const jsonData = await data.json();
        //console.log(jsonData.results);
        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(() => {
        favouriteMovies();
    }, [])
}

export default useNowPlayingMovies;