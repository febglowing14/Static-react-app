import {createRoot} from "react-dom/client"
import './index.css'
import image from './assets/png-react.png';

const root = createRoot(document.getElementById("root"))
root.render(
  <main>
    <header>
    <img src={image} width={75}></img>
    <h2>ReactFacts</h2>
    </header>
    
    <h2>Fun facts about react</h2>
    <ul className="fact-list">
    
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200K stars on GitHub</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </main>

  
  
)

