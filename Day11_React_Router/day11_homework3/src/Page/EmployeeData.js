import { Link } from "react-router-dom";
import employeeData from "../Data/data";

function EmployeeData() {
    
  return(
    <>
      <h2 style={{color:'brown'}}>All Employee Lists:</h2>
      <ul>
        {employeeData.map((x)=>
        <li>{x.id}: {x.firstname} {x.lastname}: Department : {x.department} : <Link to={`${x.id}`}><button>Employee Details</button></Link></li>
        )}
      </ul>
    </>
  )
  
  }

  export default EmployeeData;