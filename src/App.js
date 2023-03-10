import './App.css';
import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <div className="blur" style={{top: '-18%', right: '0'}}></div>
      <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
      <Home></Home>
      {/* <Profile></Profile> */}
      {/* <Auth></Auth> */}
    </div>
  );
}

export default App;
