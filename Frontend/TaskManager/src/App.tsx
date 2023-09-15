import {Button} from './components/Button'
import './App.css'
import {useState} from 'react';


function App() {
  
  const [text, setText] = useState("")
  const [isClicked, setIsclicked] = useState(false)
 
  function handleChangeText(e:any){
    var texto=e.target.value;
    setText(texto);  
  }

  function handleChangeButton(){
    setIsclicked(!isClicked);
  }

  console.log(isClicked)
  console.log(text)
  
  return (
    <div>
    <h1>{isClicked ? text : "Clica Eu!"}</h1>
    <Button text={text} click={handleChangeButton} />
    <input type="text" placeholder="Digitae!" onChange={handleChangeText} />
    </div>   
  )
}

export default App