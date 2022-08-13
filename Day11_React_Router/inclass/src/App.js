
import './App.css';

//Lab2 React Routing - Custom Filter

import { Routes, Route, Outlet, Link, useParams,useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Example</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Lab3 React Routing - Redirect with Data */}
          <Route path="noodle" element={<Noodle />} />
          <Route path="noodle/detail" element={<NoodleDetail />}/>

          {/*Lab2 React Routing - Custom Filter*/}
          <Route path="product" element={<Product />} />
          <Route path="product/:id" element={<ProductDetail />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>

          <li><Link to="/noodle">Noodle</Link></li>

          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/nothing-here">Nothing Here</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (<h2>Home</h2>);
}

function About() {
  return (<h2>About</h2>);
}

function Dashboard() {
  return (<h2>Dashboard</h2>);
}

function NoMatch() {
  return (
    <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
  );
}



function Product() {
  const productList = [
    { id: '01', name: 'iPhone 11' },
    { id: '02', name: 'iPhone 12' },
    { id: '03', name: 'iPhone 13' },
    { id: '04', name: 'iPhone 14' },
  ]
  return (<><h2>Product</h2><ul>
    {productList.map(x => <li><Link to={`${x.id}`}>{x.name}</Link></li>)}
  </ul></>
  );
}

function ProductDetail() {
  let param = useParams();

  console.log(param);
  return (
    <><h2>Product Detail</h2>
    <p>You open product {param.id}</p>
    </>
  );
}

// Lab3 React Routing - Redirect with Data 
function Noodle() {
  let navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = { topping: formData.getAll('toppings'), noodle: formData.get('noodle') }
    navigate('/noodle/detail', { replace: true, state: { data } })
  }
  return (<><form onSubmit={handleChange}>
    <p>What would you like?</p>
    <p>
      <label>
        <input type="radio" name="noodle" value="small" />
        เส้นเล็ก
      </label>
      <br />
      <label>
      <input type="radio" name="noodle" value="big" />
        เส้นใหญ่
      </label>
      <br />
    </p>

    <p>
      <label>
        <input type="checkbox" name="toppings" value="meatBall" />
        ลูกชิ้น
      </label>
      <br />
      <label>
        <input type="checkbox" name="toppings" value="meat" />
        เนื้อ
      </label>
      <br />
      <label>
        <input
          type="checkbox" name="toppings" value="vegetable" />
        ผัก
      </label>
    </p>
    <input type='submit' />
  </form>
  </>
  );
}

function NoodleDetail() {
  const location = useLocation();
  let order = location.state.data
  return (<><h2>Noodel Detail</h2>
    <h3>คุณสั่งเส้น {order.noodle}</h3>
    <h3>คุณสั่ง Topping {order.topping.map(x=> <span>{x} - </span>)}</h3>
  </>);
}







//Lab 2 Inclass

// function App() {
//   return <Routing/>;
// }

// function Routing() {
//   return (
//     <Routes>
//       <Route path='/' element={<Layout/>}>
//       <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path='product' element ={<Product/>}/>
//           <Route path="*" element={<NotMatch />} />
//       </Route>
//     </Routes>
//   );
// }

// function Layout() {
//   return(
//     <ContainerComp>
//       <HeaderComp></HeaderComp>
//       <MenuComp></MenuComp>
//       <ContentComp></ContentComp>
//       <FooterComp></FooterComp>
//     </ContainerComp>
//   );
// }

// function ContainerComp(props) {
//   return props.children
// }

// function HeaderComp () {
//   return <><h1>Header</h1><hr /></>
// }

// function MenuComp () {
//   return (
//     <>
//     <h1>Menu</h1>
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/product">Product</Link></li>
//         <li><Link to="/wrongpath">Wrongpath</Link></li>
//       </ul>
//     </nav>
//     <hr/>
//     </>
//   )

// }

// function ContentComp () {
//   return <><h1> <Outlet /></h1> <hr/></>
// }

// function FooterComp () {
//   return <><h1>Footer</h1><hr/></>
// }


// function Home () {
//   return <h2>Home</h2>
// }

// function About () {
//   return <h2>About Us</h2>
// }

// function Product () {
//   return <h2>Product</h2>
// }

// function NotMatch () {
//   return <h2>Not Match</h2>
// }



// function App() {
//   return (
//     <div>
//       <h1>Example</h1>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path='product' element ={<Product/>}/>
//           <Route path="*" element={<NoMatch />} />
//         </Route>
//       </Routes>
//       <hr />
//     </div>

//   );
//   function Layout() {
//     return (
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><Link to="/product">Product</Link></li>
//             <li><Link to="/nothing-here">Nothing Here</Link></li>
//           </ul>
//         </nav>
//         <hr />
//         <Outlet />
//       </div>
//     );
//   }

//   function Home() {
//     return (<h2>Home</h2>);
//   }
  
//   function About() {
//     return (<h2>About</h2>);
//   }
  
//   function Dashboard() {
//     return (<h2>Dashboard</h2>);
//   }
  
//   function NoMatch() {
//     return (
//       <><h2>Nothing to see here!</h2><p><Link to="/">Go to the home page</Link></p></>
//     );
//   }
  
  
// }


export default App;