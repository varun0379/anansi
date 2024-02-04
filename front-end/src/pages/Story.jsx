import {useParams} from "react-router-dom";

function Story() {
    const {storyId} = useParams();
    console.log(storyId);

    return <div>Story: {storyId}</div>
}
export default Story