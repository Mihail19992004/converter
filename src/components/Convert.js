import React, {useEffect, useState, useRef} from 'react'

export function Convert({res,length,first,setSecond, setFirst, second}) {
    const [firsInput, setFirstImp] = useState([])
    const [secondInput, setSecondImp] = useState([])
    const [result, setResult] = useState(0)
    const [state, setState] = useState(length[1])
    const [secondState, setSecondState] = useState(length[2])


    const onSelectValue = (index) => {

        setState(length[index])

    }

    const handleSelectValue = () => {
        console.log(state)
    }



    function changeSecondInput(e) {
        setSecondImp(e.target.value)

    }
    function changeFirstInput(e) {
        setFirstImp(e.target.value)

    }
    useEffect(()=> {
        console.log(state)
    }, [])
    function startConvert() {
        console.log(state[1].Previous)

         setResult(+((firsInput * state[1].Previous)/(+(secondState[1].Previous))).toFixed(2))

           console.log(state)




    }
    function changeFirstSelect(e) {
        setState(length[e.target.value])
        console.log(state)
        setFirst(e.target.value)

    }
    function changeSecondSelect(e) {
        setSecondState(length[e.target.value])
        console.log(secondState)


    }

    return (
        <section>
            <div className="container">
                <input type='number' onChange={changeFirstInput}/>
                    <select onChange={changeFirstSelect} >
                        {
                            length.length === 34 ? length.map((e,i)=> (<option  value={i}>{e[1].Name}</option>) ) : <option>Netu</option>
                        }
                    </select>
                <select onChange={changeSecondSelect} >
                    {
                        length.length === 34 ? length.map((e,i)=> (<option  value={i}>{e[1].Name}</option>) ) : <option>Netu</option>
                    }
                </select>

                    <input type="text" value={result}/>

            </div>
            <div className="start">
                <button onClick={startConvert}>Start</button>
            </div>

        </section>
    )
}