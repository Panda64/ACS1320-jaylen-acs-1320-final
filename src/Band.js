import './Band.css';
import Like from './Like';

function Band(props) {
  const { name, formed, origin, fans, split, id } = props
  return (
    <div className="Band">
        <h1>{name}</h1>
        <p><b>Origin: </b>{origin}</p>
        <p><b>Fans: </b>{fans.toLocaleString('en')}</p>
        <p><b>Formed: </b>{formed}</p>
        <p><b>Split: </b>{split}</p>
        <Like />  
    </div>
  )
}
  
  export default Band