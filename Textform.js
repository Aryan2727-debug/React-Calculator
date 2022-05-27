import React , {useState} from 'react'

export default function Textform(props) {

    const [input1 , setInput1] = useState(0);

    const [input2 , setInput2] = useState(0);

    const [ans , setAns] = useState(0);
    
    function add(){
        console.log("The Addition Button is clicked");
        let a = parseInt(input1);
        let b = parseInt(input2);
        let result = parseInt(a+b);
        console.log(result);
        setAns(result);
    }

    function subtract(){
        console.log("The Subtraction Button is clicked");
        let a = parseInt(input1);
        let b = parseInt(input2);
        let result = parseInt(a-b);
        console.log(result);
        setAns(result);
    }

    function multiply(){
        console.log("The Multiply Button is clicked");
        let a = parseInt(input1);
        let b = parseInt(input2);
        let result = parseInt(a*b);
        console.log(result);
        setAns(result);
    }

    function divide(){
        console.log("The Divide Button is clicked");
        let a = parseInt(input1);
        let b = parseInt(input2);
        let result = parseFloat(a/b);
        console.log(result);
        setAns(result);
    }

    function exponent(){
      console.log("The Exponent Button is clicked");
      let a = parseInt(input1);
      let b = parseInt(input2);
      let result = parseInt(a**b);
      console.log(result);
      setAns(result);
    }

    function modulo(){
      console.log("The Modulo Button is clicked");
      let a = parseInt(input1);
      let b = parseInt(input2);
      let result = parseInt(a%b);
      console.log(result);
      setAns(result);
    }

    function clear(){
      console.log("The Clear Button is clicked");
      setInput1(0);
      setInput2(0);
      setAns(0);      
    }

    function squareRoot(){
      console.log("The Square Root Button is clicked");
      let a = parseInt(input1);
      let result = parseFloat(Math.sqrt(a));
      console.log(result);
      setAns(result);
    }

    function cubeRoot(){
      console.log("The Cube Root Button is clicked");
      let a = parseInt(input1);
      let result = parseFloat(Math.cbrt(a));
      console.log(result);
      setAns(result);
    }

    function absolute(){
      console.log("The Absolute Button is clicked");
      let a = parseInt(input1);
      let result = parseInt(Math.abs(a));
      console.log(result);
      setAns(result);
    }

    function log(){
      console.log("The Logarithm Button is clicked");
      let a = parseInt(input1);
      let result = parseFloat(Math.log(a));
      console.log(result);
      setAns(result);
    }

  return (
      <>
    <div className="mb-3">
      <h2>Try it yourself!</h2>
  <label  for="formGroupExampleInput" className="form-label">Enter 1st number</label>
  <input value={input1} onChange={e => setInput1(e.target.value)} type="text" className="form-control" id="formGroupExampleInput" placeholder="Number"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Enter 2nd number</label>
  <input value={input2} onChange={e => setInput2(e.target.value)} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Number"/>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Output</label>
  <textarea value={ans} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button onClick={add} className="btn btn-primary">Add</button>
<button onClick={subtract} className="btn btn-success mx-3">Subtract</button>
<button onClick={multiply} className="btn btn-warning mx-3">Multiply</button>
<button onClick={divide} className="btn btn-dark mx-3">Divide</button>
<button onClick={exponent} className="btn btn-danger mx-3">Exponent</button>
<button onClick={modulo} className="btn btn-primary mx-3">Modulo</button>
<button onClick={squareRoot} className="btn btn-warning mx-3">Square Root</button>
<button onClick={cubeRoot} className="btn btn-dark mx-3">Cube Root</button>
<button onClick={absolute} className="btn btn-success mx-3">Absolute Value</button>
<button onClick={log} className="btn btn-primary mx-3">Natural Logarithm</button>
<button onClick={clear} className="btn btn-danger my-3">Clear</button>

     </>
  )
}
