
import './App.css';
import {Convert} from "./components/Convert";
import React, {useEffect, useState} from "react";
import {Block} from "./components/Block";

function App() {

  const [res , setRes] = useState([])
  const [first , setFirst] = useState('Австралийский доллар')
  const [second , setSecond] = useState(0)
  const getValue = async () => {
    const response = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
    const data = await response.json()
    await setRes(Object.entries(data.Valute))

  }

  useEffect( ()=> {
    getValue()

  }, [])



  return (
    <div className="App">


      {  res.length === 34 ?<Convert setSecond={setSecond} first={first} second={second}
                                     setFirst={setFirst} length={res} res={res[1]}/> : <h1>{res.length}</h1>}
      <section>
        {
          res.map((e,i)=> (<Block res={e[1]} />))
        }
      </section>




    </div>
  );
}

export default App;
