import logo from './logo.svg';
import './App.css';

import useFetch from './hook/useFetch'

function App() {
  const {data, isLoading, error} = useFetch('search', {
    query: 'React',
    num_pages: 1
  })

  console.log(data[0].employer_logo);
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
