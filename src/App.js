import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// · 'path 속성 경로를 요청하면 이 component 를 보여줘' 라고 지정
// · exact 속성이 true 이면 경로가 정확하게 일치할 때만 컴포넌트를 렌더링한다.
function App()
{
  return ( 
  <HashRouter>  
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" component={About}></Route>
    <Route path="/movie/:id" component={Detail}></Route>
  </HashRouter>
  );
}

export default App; 
