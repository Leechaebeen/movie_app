// component : HTML 을 반환하는 함수 
// jsx : js 안의 HTML. 컴포넌트를 만들고 어떻게 사용하는지에 대한 것  

function Food({name, picture})
{
  // props.fav 와 {fav} 는 같은 구문이다.
  // console.log(props.fav);
  return <div>
    <h2>I like {name}</h2>
    <img src={picture}></img>
  </div>

}

const foodILike = [
  { 
    name: "Samgyeopsal",
    image : "https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg"
  },
  { 
    name: "Bibimbap",
    image : ""
  },
  {
    name : "Doncasu",
    image : ""
  },
  {
    name : "Kimbap",
    image : ""
  },
  {
    name: "samgyetang",
    image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
];

// map 은 function 을 취해서 그 function을 array 의 각 item 에 적용한다. 그리고 각 연산의 결과로 array 를 만들어 반환한다.
/*
  friends = ["a","b","c","d"];

  friends.map(fucntion(current) // current : 각 아이템
  {
    console.log(current);
    return 0;
  })

--==>> a 
       b
       c
       d 
       [0,0,0,0]
*/

function App() 
{
  return (
    <div className="App">
      {foodILike.map(dish =>(
        <Food name={dish.name} picture={dish.image} />
        ))}
    </div>
  );
}


export default App;
