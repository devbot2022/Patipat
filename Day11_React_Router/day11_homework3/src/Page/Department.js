import {useNavigate} from 'react-router-dom';

function Department() {
    //Redirect Data
    let navigate = useNavigate();
  
    return (
    <>
        <h1 style={{color:'red'}}>Department List</h1>
      <ul>
        <li>Marketing</li><button onClick={()=>{navigate('/marketing');}}>Marketing Team Details</button>
        <li>Sales</li><button onClick={()=>{navigate('/sales');}}>Sales Team Details</button>
        <li>Engineering</li><button onClick={()=>{navigate('/engineer');}}>Engineering Team Details</button>
      </ul>
    </>
    );
  }

  export default Department;