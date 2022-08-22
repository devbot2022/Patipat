
import { useParams ,useLocation} from 'react-router-dom';
import employeeData from '../Data/data';


function EmployeeDetail(){
const location = useLocation();
console.log(location);

const {dataID} = useParams();
const detail = employeeData.find((detail)=>detail.id===dataID);  // checked path.id


return(
    <>
        <h1>Employee Personal Details</h1>
        <ul>
        <li>Employee ID : </li>
        <li>Firstname : </li>
        <li>Lastname : </li>
        <li>Age : </li>
        <li>Department : </li>
        <li>Salary : </li>
        </ul>
    </>
    )
}

export default EmployeeDetail;












