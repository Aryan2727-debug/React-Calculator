import React , {useState} from 'react'

export default function About(props) {

    const [myStyle , setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    });

    const [btnText , setBtnText] = useState("Enable Red Mode");

    function toggleMode(){
        if(myStyle.color==="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"#8B0000"
            })
            setBtnText("Enable Light Mode");
        }else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtnText("Enable Red Mode");
        }
    }

  return (
      <>
      
    <div  className="accordion my-4" id="accordionExample">
    <h2>About the Calculator</h2>
    <button onClick={toggleMode} className="btn btn-danger my-3">{btnText}</button>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Definition
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the Calculator's definition.</strong> A Calculator is a device that performs Arithmetic operations on numbers. It is basically a portable electronic device used to perform calculations , ranging from basic Arithmetic to complex Mathematics.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Functions of Calculator
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>These are some basic functions of the Calculator.</strong> The simplest Calculators can perform Addition , Subtraction , Multiplication and Division . More sophisticated Calculators can handle Exponent IAL operations , roots , Logarithms , Trigonometric Functions and Hyperbolic Functions.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Types of Calculators
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>These are some various types of Calculators.</strong> Abacus , Basic Calculators , Scientific Calculators , Graphing Calculators , Printing Calculators and Online Calculators. 
      </div>
    </div>
  </div>
</div>
</>
  )
}
