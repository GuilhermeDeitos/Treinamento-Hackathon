import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import './App.css'



/*
import {Button} from './components/Button'

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
*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App