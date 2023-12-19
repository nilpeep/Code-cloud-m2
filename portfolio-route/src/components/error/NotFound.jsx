import "./NotFound"
import error from "../../img/404.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate=useNavigate()
  return (
    <div className="text-center">
      <div>
        <button className="btn btn-warning mb-4" onClick={()=>navigate("/")}>Go Back Home</button>
      </div>
      <img src={error} alt="" />
    </div>
  )
}

export default NotFound