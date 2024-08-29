import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

const User = (props) => {
  const {name} = props;
  return (
    <div>
      <h1>My name is {name}</h1>
    </div>
  )
}

function App() {
  const [name] = useState("Kiki")

  return (
    <div className="App">
      <div>
        <h1>React Component</h1>
        <User name={name} />
        <Counter initialCount={0}/>
      </div>
      
    </div>
  );
}

export default App;
