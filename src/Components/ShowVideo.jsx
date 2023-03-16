import YouTube from "react-youtube";
import "./ShowVideo.css";
import { useParams} from "react-router-dom";
import Comments from "./Comments";


export default function ShowVideo() {
    const { id } = useParams();
    return (
        <div className="showVideo">
        <div className="video">
            <YouTube videoId={id}/>
        </div>
        <Comments id={id}/>
        </div>
    )
}

