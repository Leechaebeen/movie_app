// component : HTML 을 반환하는 함수 
// jsx : js 안의 HTML. 컴포넌트를 만들고 어떻게 사용하는지에 대한 것  

function Food({fav})
{
  // props.fav 와 {fav} 는 같은 구문이다.
  // console.log(props.fav);
  return <h1>I like {fav}</h1>
}

function App() 
{
  return (
    <div className="App">
      HELLO!!!
      {/* Food 컴포넌트의 fav 라는 속성에 kimchi 라는 값 부여. 이 값들은 food 컴포넌트에 전달된다. */}
      <Food fav="kimchi"/>
      <Food fav="ramyeon"/>
      <Food fav="samgyopsal"/>
      <Food fav="zzuggumi"/>
    </div>
  );
}

export default App;
