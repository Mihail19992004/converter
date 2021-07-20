import React, { useEffect, useState, useRef } from 'react';

export function Convert({
  res,
  length,
  first,
  setSecond,
  setFirst,
  setValueLeftBar,
  second,
  valueLeftBar,
}) {
  const [firsInput, setFirstImp] = useState([]);
  const [secondInput, setSecondImp] = useState([]);
  const [result, setResult] = useState(0);
  const [state, setState] = useState(length[1]);
  const [secondState, setSecondState] = useState(length[2]);

  const [disabled, setDisabled] = useState(0);

  const handleDisable = (id) => {
    setDisabled(id);
  };

  const onSelectValue = (index) => {
    setState(length[index]);
  };

  const handleSelectValue = () => {
    console.log(state);
  };

  function changeSecondInput(e) {
    setSecondImp(e.target.value);
  }
  function changeFirstInput(e) {
    setFirstImp(e.target.value);
  }
  useEffect(() => {
    console.log(state);
  }, []);
  function startConvert() {
    console.log(state[1].Previous);

    setResult(+((firsInput * state[1].Previous) / +secondState[1].Previous).toFixed(2));

    console.log(state);
  }

  function changeFirstSelect(e) {
    setState(length[e.target.value]);
    setDisabled(e.target.value);

    setFirst(e.target.value);
  }
  function changeSecondSelect(e) {
    setValueLeftBar(e.target.value);

    console.log('cov', length[e.target.value]);
  }

  useEffect(() => {
    setSecondState(valueLeftBar);
    console.log('valie', valueLeftBar);
  }, [valueLeftBar]);
  return (
    <section>
      <div className="container">
        <input type="number" min="0" onChange={changeFirstInput} />
        <select onChange={changeFirstSelect}>
          {length.length === 34 ? (
            length.map((e, i) => (
              <option id={i} value={i}>
                {e[1].Name}
              </option>
            ))
          ) : (
            <option>Netu</option>
          )}
        </select>
        <select onChange={changeSecondSelect} value={valueLeftBar ? valueLeftBar : null}>
          {length.length === 34 ? (
            length.map((e, i) => (i != disabled ? <option value={i}>{e[1].Name}</option> : null))
          ) : (
            <option>Netu</option>
          )}
        </select>
        <div className="start">
          <button onClick={startConvert}>Convertation</button>
        </div>
        <p>{result !== 0 ? `${result} ${secondState[0]}` : ''}</p>
      </div>
    </section>
  );
}
