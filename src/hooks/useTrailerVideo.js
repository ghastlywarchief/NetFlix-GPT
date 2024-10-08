import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = (id) => {
    
    const dispatch = useDispatch();

    const fetchVideoList = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS);
        const jsonData = await data.json();
        console.log(jsonData.results);
        const trailer = jsonData.results.filter(i => i.type==="Trailer");
        dispatch(addTrailerVideo(trailer[0]));
        console.log(trailer[0]);
    }    
    
    useEffect(()=>{
        fetchVideoList();
    }, [])
}

export default useTrailerVideo;