
import './App.css';
import { Routes, Route, Outlet, Link, useParams, useLocation,useNavigate } from "react-router-dom";


function App() {
  return (
    <div>
      <h1 style={{color:'blueviolet'}}>Products Stock Website</h1>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='shopstock' element={<ShopStock/>}/>
        <Route path='shopstock/:name' element={<ProductDetail/>}/>
        <Route path='location' element={<WarehouseLocation/>}/>
        <Route path='location/:name' element={<WarehouseDetail/>}/>
        <Route path='contact' element={<Contact/>} />
        <Route path='*' element={<ErrorPage/>} />
      </Route>
    </Routes>
    <hr/>
    </div>
  );
}


function Layout() {
  return(
    <div style={{backgroundColor:'lightblue'}}>
      <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shopstock'>Shop Stock</Link></li>
        <li><Link to='/location'>Warehouse Location</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      </nav>
      <hr/>
      <div style={{backgroundColor:'gold'}}>
        <Outlet/>
      </div>
    </div>
  );
}

function Home() {
  return(<><h2>Home</h2>
  <p><h1 style={{fontFamily:'monospace', color:'red'}}>....THIS IS MY REACT HOME PAGE...</h1></p></>);
}

function ShopStock() {
  let navigate = useNavigate();
  const productList = [
    {id:'01', name:'Smart TV'},
    {id:'02', name:'Mobile'},
    {id:'03', name:'Tablet'},
    {id:'04', name:'Laptop'},
    {id:'05', name:'Smart Watch'}
  ]
  return(
    <>
    <h2>Shop Stock</h2>
    <p>Product Lists:</p>
      <ul>
        {productList.map((x)=><li><Link to={`${x.name}`}>{x.name}</Link></li>)}
      </ul>
      <button onClick={()=>{
        navigate('/');
      }}
      >back</button>
    </>
  )
}


function ProductDetail() {
  let {name}= useParams();
  // console.log(name);
  return (<>
  <h2>Product Details</h2>
  <p>You Open Product : {name}</p>
  </>
  );
}

function WarehouseLocation() {
  const location = useLocation();
  console.log(location);

  let locationList = [
    {id:'01', 
      WarehouseName:'Chonburi',
        Latitude:'13.361143', 
        Longitude:'100.984673', 
        TelNo:'038-8888888', 
        FaxNo:'038-8888889'
    },
    {id:'02', 
      WarehouseName:'Chaingmai',
        Latitude:'18.793867', 
        Longitude:'98.997116', 
        TelNo:'054-1253551', 
        FaxNo:'054-1253552'
    },
    {id:'03', 
      WarehouseName:'Udonthani',
        Latitude:'17.41567', 
        Longitude:'102.78589', 
        TelNo:'042-995995', 
        FaxNo:'042-995996'
    },
    {id:'04', 
      WarehouseName:'Songkla',
        Latitude:'7.19882', 
        Longitude:'100.5951', 
        TelNo:'046-898989', 
        FaxNo:'054-898888'
    },
    {id:'05', 
      WarehouseName:'Bangkok',
        Latitude:'13.736717', 
        Longitude:'100.523186', 
        TelNo:'02-256256', 
        FaxNo:'02-256257'
    },
  ]

  //Redirect data
  let navigate = useNavigate();
  

  return (
  <>
    <h2>Warehouse Location</h2>
    <h3>Location Lists:</h3>
      <ul>
      
        {locationList.map((x)=>
          <li>
            <Link to={`${x.WarehouseName}`}>
            <h3 style={{color:'red', fontFamily:'cursive'}}>Warehouse Location : {x.WarehouseName}</h3>
            </Link>
          </li>)
        }
   
      </ul>
      <button onClick={()=>{
          navigate('/');
        }}>back to home
      </button>

    </>
    
  );
}

//Redirect Data

function WarehouseDetail(){

  let locationDetail = [
    {id:'01', 
      WarehouseName:'Chonburi',
        Latitude:'13.361143', 
        Longitude:'100.984673', 
        TelNo:'038-8888888', 
        FaxNo:'038-8888889'
    },
    {id:'02', 
      WarehouseName:'Chaingmai',
        Latitude:'18.793867', 
        Longitude:'98.997116', 
        TelNo:'054-1253551', 
        FaxNo:'054-1253552'
    },
    {id:'03', 
      WarehouseName:'Udonthani',
        Latitude:'17.41567', 
        Longitude:'102.78589', 
        TelNo:'042-995995', 
        FaxNo:'042-995996'
    },
    {id:'04', 
      WarehouseName:'Songkla',
        Latitude:'7.19882', 
        Longitude:'100.5951', 
        TelNo:'046-898989', 
        FaxNo:'054-898888'
    },
    {id:'05', 
      WarehouseName:'Bangkok',
        Latitude:'13.736717', 
        Longitude:'100.523186', 
        TelNo:'02-256256', 
        FaxNo:'02-256257'
    },
  ]
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location);


  return (<><h2>Warehouse Details</h2>
  <ul>
    {locationDetail.map((x)=>
          <li>
            <h2 style={{color:'red', fontFamily:'cursive'}}>Location ID : {x.id}</h2>
            <h3 style={{color:'purple', fontFamily:'cursive'}}>WH Location : {x .WarehouseName}</h3>
            <p style={{color:'blue', fontFamily:'cursive'}}>Latitude : {x.Latitude}</p>
            <p style={{color:'blue', fontFamily:'cursive'}}>Longitude : {x.Longitude}</p>
            <p style={{color:'blue', fontFamily:'cursive'}}>Tel No. : {x.TelNo}</p>
            <p style={{color:'blue', fontFamily:'cursive'}}>Fax No. : {x.FaxNo}</p>
          </li>)
        }
  </ul>
    <button onClick={()=>{
      navigate('/location');
    }}>back to location</button>
  </>);

}

function Contact() {
  let navigate = useNavigate();
  return(
    <>
    <h2>Contact</h2>
    <h4>Tel. 0619951955</h4>
    <button onClick={()=>{
      navigate('/');
    }}>back</button>
    </>
    
  );
}

function ErrorPage() {
  return (
    <>
      <h2>Error! Page Not Found</h2>
      <p><Link to="/">Go to the home page</Link></p>
    </>
  );
}


export default App;
