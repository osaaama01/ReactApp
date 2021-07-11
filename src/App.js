import './App.css';
import {useState} from 'react';

function App() {
  var [list,setList] = useState([]);
  let [value,setValue] = useState('');
  const onClickSet= (e)=>
  {
    e.preventDefault();
    list.push(value)
    list = [...new Set(list)];
    console.log(list);
    setList(list);
  }
  return (
      <div>
        <form>
          <input id="list-input" type="text" value={value} onChange={(e)=>setValue(e.target.value)} required/>
          <button onClick={(e)=>onClickSet(e)}>Submit!</button>
        </form>
        {/* <li>
          {list.map=(val)=>}
        </li> */}
      </div>
  );
}

export default App;
