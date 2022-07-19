import React  from 'react';
import './style.css';

export default function App() {
  const or = 'Oranage';
  const app = 'apple';
  const bana = 'banana';
  var items = ['jackfruit', 'Oranage', 'green', 'tellow', 'ghuag'];
  var item = items[Math.floor(Math.random() * items.length)];

//   const [item, setItem] = useState(['jackfruit', 'Oranage', 'green', 'tellow', 'ghuag'])
// setInterval(()=>{ setItem([Math.floor(Math.random() * items.length)])},1500)
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
        <div>
          {' '}
          <h2 id="head">These are some of favriots foods </h2>
        </div>
        <ol className="foods">
          <li key="one-key">{or}</li>
          <li key="teo-key">{app}</li>
          <li key="tgre-key">{bana}</li>
          <li key="uni-key">{item}</li>
        </ol>
      </div>
    </div>
  );
}
