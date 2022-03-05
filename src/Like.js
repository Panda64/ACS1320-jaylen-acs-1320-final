import { useState } from 'react';
import './Like.css';

function Like() {
  const [likes, setLikes] = useState(0);  
  return (
    <div className="Like">
        <button className="Down" onClick={() => setLikes(likes - 1)} > 👎 </button>
        <p>{likes}</p>
        <button className="Up" onClick={() => setLikes(likes + 1)} > 👍 </button>
    </div>
  )
}
  
  export default Like