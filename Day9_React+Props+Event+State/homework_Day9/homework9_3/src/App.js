//homework9_3
import './App.css';
import{useState} from 'react';


function App() {
  let[toDoList, setToDoList] = useState(
    [
      {
        date : Date(),
        msg : 'Hello World!'
      }
    ]
  );

  function Check_Enter(enter) {
    let message =enter.target.value;

    if (enter.key ==='Enter' && message !=="") {
      let toDo =[...toDoList];
      toDo.push({date:Date(), msg: message});
      setToDoList(toDo);
      enter.target.value='';

    }else if (enter.key==='Enter' && message=="") {
      enter.target.value ="";
      alert ('No Have message ');
    }
  }


  function deletedList (dl) {
    let answer = toDoList.filter((ok)=> ok.msg !== dl.msg);
    setToDoList(answer);
  }

  return (
    <div>
      <div>
        {toDoList.map((dl)=>(
          <div className='daywork'>
            <p>{dl.date}</p>
            <p>{dl.msg}</p>
            <button onClick={()=>deletedList(dl)} >Deleted!</button>
          </div>
        ))};
      </div>
      <input className='text-input' type="text" onKeyDown={Check_Enter}></input>
    </div>
  );
}

export default App;
