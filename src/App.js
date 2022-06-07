import Navbar from './Components/Navbar/Navbar';
import HeaderText from './Components/Header/HeaderText';
import Biography from './Components/Biography/Biography';
import Discography from './Components/Discography/Discography';
import DiscoText from './Components/Discography/DiscoText';
import albums from './Components/Discography/Data/Data';

// import pic6 from './Assets/image 5.png';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderText />
      <Biography />
      <DiscoText />
      <Discography
        list= {albums[0][3]} />
    </div>
  );
}

export default App;
