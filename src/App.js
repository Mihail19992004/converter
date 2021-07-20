import './App.css';
import { Convert } from './components/Convert';
import React, { useEffect, useState } from 'react';
import { Block } from './components/Block';
import GitHubIcon from '@material-ui/icons/GitHub';

export function App() {
  const [res, setRes] = useState([]);
  const [submitValute, setSubmitValute] = useState(false);
  const [first, setFirst] = useState('Австралийский доллар');
  const [second, setSecond] = useState(0);
  const getValue = async () => {
    const response = await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`);
    const data = await response.json();
    await setRes(Object.entries(data.Valute));
  };

  const [valueLeftBar, setValueLeftBar] = useState(0);

  const handleValueLeftBar = (id) => {
    setValueLeftBar(id);
  };

  useEffect(() => {
    getValue();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>My converter</h1>
        <div className="git-hub">
          <GitHubIcon />
        </div>
      </header>
      <div className="flex-box">
        S
        {res.length === 34 ? (
          <Convert
            className="left-side"
            valueLeftBar={valueLeftBar}
            setSecond={setSecond}
            first={first}
            second={second}
            setFirst={setFirst}
            length={res}
            setValueLeftBar={setValueLeftBar}
            res={res[1]}
          />
        ) : (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}
        <div className="line"></div>
        <section className="conteiner-width">
          {res.map((e, i) => (
            <Block
              res={e[1]}
              setSubmitValute={setSubmitValute}
              submitValute={submitValute}
              mass={i}
              handleValueLeftBar={handleValueLeftBar}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
