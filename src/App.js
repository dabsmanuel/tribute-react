import Navbar from './Components/Navbar/Navbar';
import HeaderText from './Components/Header/HeaderText';
import Biography from './Components/Biography/Biography';
import Discography from './Components/Discography/Discography';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderText />
      <Biography />
      <Discography />
      <Footer/>
    </div>
  );
}

export default App;
