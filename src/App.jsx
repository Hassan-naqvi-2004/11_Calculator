import React ,{useState}from "react";

const App = () => {
  const [displayvalue, setDisplayvalue] = useState('')
  const handleClick= (value)=>{
    if(value === "="){
      setDisplayvalue (eval(displayvalue))
      

    }else if (value === 'C'){
      setDisplayvalue('')
    }else{
      setDisplayvalue(displayvalue + value)
    }

  }
  return (
    <div>

    <div className="main-i">

      <div className="main">
        <h1>Calculator App</h1>
      </div>

      <div className="grand">
        
       
          <div className="bg">
            <input type="text"  value={displayvalue}/>
          </div>
          <div className="allbuttons">
            <div className="main-btn">
              <div className="btn">
            
                <button className="btn3" onClick={()=>handleClick('C')}>c</button>
                <button className="btn1" onClick={()=>handleClick('/')}>/</button>
              </div>
              <div className="bg1">
                <button onClick={()=>handleClick('9')}>9</button>
                <button  onClick={()=>handleClick('8')}>8</button>
                <button  onClick={()=>handleClick('7')}>7</button>
              </div>

              <div className="bg1">
                <button  onClick={()=>handleClick('6')}>6</button>
                <button  onClick={()=>handleClick('5')}>5</button>
                <button  onClick={()=>handleClick('4')}>4</button>
              </div>

              <div className="bg1">
                <button  onClick={()=>handleClick('3')}>3</button>
                <button  onClick={()=>handleClick('2')}>2</button>
                <button  onClick={()=>handleClick('1')}>1</button>
              </div>

              <div className="bg1">
                <button  onClick={()=>handleClick('0')}>0</button>
                <button  onClick={()=>handleClick('00')}>00</button>
                <button  onClick={()=>handleClick('.')}>.</button>
              </div>
            </div>

            <div className="BTNS">
              <button className="BTNS1"  onClick={()=>handleClick('*')}>*</button>
              <button className="BTNS2"  onClick={()=>handleClick('-')}>-</button>
              <button className="BTNS3"  onClick={()=>handleClick('+')}>+</button>
              <button className="BTNS4"  onClick={()=>handleClick('=')}>=</button>
            </div>
          </div>
        
      </div>

    </div>

    </div>
  );
};

export default App;
