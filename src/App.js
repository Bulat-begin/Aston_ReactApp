import FetchData from './Components/FetchData/FetchData';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css' ;

function App(props) {
 return (
   <div className="App">
     <Header/>
     <SearchBar/>
     <FetchData/>
      <Footer/>
    </div>
  );
}

export default App;
