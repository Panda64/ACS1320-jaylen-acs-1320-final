import data from './metal.json'
import './Heading.css';

function MetalMeta() {
  return (
    <div className="MetalMeta">
        <p>{`Total Bands: ${data.length}`}</p>     
    </div>
  )
}
  
  export default MetalMeta