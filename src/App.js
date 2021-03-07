import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Ho"

// 'path 속성 경로를 요청하면 이 component 를 보여줘' 라고 지정 
function App()
{
  return ( 
  <HashRouter>  
    <Route path="/" component={Home}></Route>
    <Route path="/about" component={About } ></Route>
  </HashRouter>
  );
}

export default App; 