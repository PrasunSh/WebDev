import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      
      <div className="not-found"><Link to="/">Back to the homepage...</Link>
      </div>
    </div>
  );
}
 
export default NotFound;