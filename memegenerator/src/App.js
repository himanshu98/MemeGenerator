import React from 'react';
import './App.css';
function App() {
  const [number, setNumber] = React.useState(0);
  const [detail, setDetail] = React.useState([{
    "id": "181913649",
    "name": "Drake Hotline Bling",
    "url": "https://i.imgflip.com/30b1gx.jpg",
    "width": 1200,
    "height": 1200,
    "box_count": 2
  }]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(data => data.json())
      .then(response => {
        const { memes } = response.data;
        setDetail(memes);
      });
  }
  );
  return (
    <div className="App">
      <p>It's working perfectly fine!!</p>
      <p>{number}</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * detail.length))}>Click me</button>
      <p>{detail[number].url}</p>
      <img src={detail[number].url} alt=""></img>
    </div>
  );
}

export default App;
