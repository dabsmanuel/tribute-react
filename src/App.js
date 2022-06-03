import Navbar from './Components/Navbar/Navbar';
import HeaderText from './Components/Header/HeaderText';
import Biography from './Components/Biography/Biography';
import Discography from './Components/Discography/Discography';
import DiscoText from './Components/Discography/DiscoText';
// import pic1 from './images/image 5 (1).png';
// import pic2 from './images/image 5 (2).png';
// import pic3 from './images/image 5 (3).png';
// import pic4 from './images/image 5 (4).png';
// import pic5 from './images/image 5 (5).png';
import pic6 from './Assets/image 5.png';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderText />
      <Biography />
      <DiscoText/>
      <Discography />
    </div>
  );
}

export default App;
