import { useState, useEffect } from "react";
import { Card } from "./Card";
import Logo from './logo.png'
function App() {
  const SERVER_ENDPOINT =  process.env.SERVER || 'http://localhost:5500/api/linkpreviewer';
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading]= useState(false)
  useEffect(() => {
    const regex =  /\b(http|https)?(:\/\/)?(\s*)\.(\w{2,4})(.*)/g
    const checkIsURL = regex.test(String(text.trim()));
  
    const fetchAPI = async(payload)=>{    
      setIsLoading(true)  
      const res = await fetch(SERVER_ENDPOINT, {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body:  JSON.stringify(payload)
           })
      res.status === 200 && setIsLoading(false)
      const data = await res.json()
      setData(data)
    console.log(data)
    }
  
    checkIsURL && fetchAPI({text})
    
    
    }, [ text])
  const handleChange = e=>{
    e.preventDefault()
    setText(e.target.value)
  }
  const Loader = ()=>(<div className="container"><img src={Logo} alt="" />
    <p>Loading...</p>
  </div>
  )
 
  return (
    <div className="app">
      <h1>Link Previewer</h1>
      <textarea name="" id="" cols="30" rows="3" onChange={handleChange} placeholder="Drop link here ;-)" value={text}></textarea>
      {isLoading && <Loader/>}
      {data && (<Card props={data}/>)}
      <footer>
            created by <a href="https://sprintwithcarlos.github.io/" target="_blank">Sprint With Carlos</a>
        </footer>
    </div>
    
  );

}

export default App;
