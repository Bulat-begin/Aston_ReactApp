import FetchData from './Components/FetchData/FetchData'
import Header from './Components/Header/Header'
import './App.css' 

 function App(props) {
  return (
    <div className='App'>
      <Header/>
      <FetchData/>
    </div>
  );
}

export default App;
