import { useState } from 'react';
import './App.css';
import Button from './components/Button'
function App() {
  const [dis,addDis]= useState("");
  function addVal(event){
    let val = event.target.value
    addDis(pre=>{
      return pre+val
    })
  }
  function calculate(){
    try{
      let result= eval(dis)
      // result = toString(result)
      addDis(result)
    }catch(err){
      console.log(err)
    }
  }
  
  function Clear(){
    addDis("")
  }
  function dele(){
    addDis(pre=>{
      let res =pre.slice(0,pre.length-1)
      return res
    })
  }
  return (
    <div className='calCon'>
      <input value={dis} id='display'></input>
      <div className='ButtonCon'>
      <Button val="1" Click={addVal}></Button>
      <Button val="2" Click={addVal}></Button>
      <Button val="3" Click={addVal}></Button>
      <Button val="4" Click={addVal}></Button>
      <Button val="5" Click={addVal}></Button>
      <Button val="6" Click={addVal}></Button>
      <Button val="7" Click={addVal}></Button>
      <Button val="8" Click={addVal}></Button>
      <Button val="9" Click={addVal}></Button>
      <Button val="0" Click={addVal}></Button>
      <Button val="+" Click={addVal}></Button>
      <Button val="*" Click={addVal}></Button>
      <Button val="/" Click={addVal}></Button>
      <Button val="-" Click={addVal}></Button>
      <Button val="=" Click={calculate}></Button>
      <Button val="AC" Click={Clear}></Button>
      <Button val="DEl" Click={dele}></Button>
      </div>
    </div>
  );
}

export default App;
