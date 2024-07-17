import Layout from "./Layout";
import {HashRouter} from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <HashRouter>
      <Layout/>
    </HashRouter>
  )
}

export default App