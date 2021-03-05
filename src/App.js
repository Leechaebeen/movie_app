import React from "react";

// react 는 자동으로 모든 class component 의 render() 를 실행한다.
// render() 는 React.Component 의 메소드를 오버라이딩 하는 것 
class App extends React.Component
{
  // setState() 를 사용할 때 state 안에 default 값을 선언할 필요는 없다.
  state = 
  {
    isLoading : true,
    movies : []
  }

  // 렌더링이 되면 가장 먼저 호출되는 메소드
  componentDidMount()
  {
    setTimeout (()=>{
      this.setState({isLoading : false})
    }, 6000);
  
    axios
  }


  // 렌더링 
  render()
  {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
