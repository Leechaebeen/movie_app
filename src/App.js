import React from "react";
import Proptypes from "prop-types";

// react 는 자동으로 모든 class component 의 render() 를 실행한다.
// render() 는 React.Component 의 메소드를 오버라이딩 하는 것 
class App extends React.Component
{
  // 바꿀 데이터를 넣는다 
  state = 
  {
    count : 0
  };

  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus");
  };
  

  render()
  {
    return ( 
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}


export default App;
