import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// jsx : js 안의 HTML. 컴포넌트를 만들고 어떻게 사용하는지에 대한 것  
// render(component, 적용할 위치) : component 를 사용하는 방법 
ReactDOM.render(
    <App />
  ,
  document.getElementById('potato')
);


