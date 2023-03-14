import { useParams} from "react-router-dom";

import YouTube from "react-youtube";
import "./ShowVideo.css"

export default function ShowVideo() {
    const { id } = useParams();
    return (
        <div className="video">
            <YouTube videoId={id} />
        </div>
    )
}