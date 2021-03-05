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
    // setState() 를 호출하면 react 는 state 를 refresh 하고 >> render() 메소드를 호출 << 한다.
    // current 를 통해서 현재 state 를 얻을 수 있다.
    this.setState( current => ({ count : current.count + 1 }));
  };

  minus = () => {
    // 이런 방식은 추천하지 않는다.
    this.setState({ count: this.state.count - 1 });
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
