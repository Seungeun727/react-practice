import React, {useState} from 'react';

function App() {
  const [text, setText] = useState('hello');
  // 버튼을 누를 때마 이벤트가 실행되도록 동작하는 함수
  const onSubmit = () => {
    alert('submitted!');
  };

  const onKeyUp = (event) => {  // 매개변수 event
    if (event.keyCode === 13) {  // 13이하 만족시 onSubmit() 실행함.
      onSubmit();
    }
    console.log('key up');
  }

  // let text = 'hello';

  const updateText = () => {
  //  text = 'bye';
    setText('bye');
    console.log(text);
  }
  
  return (
    <div className="App">
      {/* 키가 올라올 때 이벤트 생성 */}
      <input onKeyUp={onKeyUp} />
      {/* react는 항상 함수로 하여 이벤트를 전달한다. */}
      <button onClick={onSubmit}>Submit</button>

      <br /><br />
      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

// 내보내기
export default App;