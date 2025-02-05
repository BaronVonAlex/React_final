import { useState } from "react"
import Navbar from "./components/navBar"
import NewsBoard from "./components/newsBoard"
import './styles/themes.css';

export const App = () => {

const [category, setCategory] = useState("general")

  return (
      <div>
        <Navbar setCategory={setCategory}/>
        <NewsBoard category={category}/>
      </div>
  )
}

export default App