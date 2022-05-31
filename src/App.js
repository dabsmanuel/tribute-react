import Navbar from './Components/Navbar';
import HeaderText from './Components/HeaderText';
import Biography from './Components/Biography';
import Discography from './Components/Discography';
import DiscoText from './Components/DiscoText.jsx';
// import pic1 from './images/image 5 (1).png';
// import pic2 from './images/image 5 (2).png';
// import pic3 from './images/image 5 (3).png';
// import pic4 from './images/image 5 (4).png';
// import pic5 from './images/image 5 (5).png';
import pic6 from './images/image 5.png';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderText />
      <Biography />
      <DiscoText/>
      <Discography disc={pic6} caption="Album - 1961" list="Dá Sorte" />
      <Discography list="Sonhando" />
      <Discography list="Murmúrio" />
      <Discography list="Tu Serás" />
      <Discography list="Samba Feito pra Mim" />
      <Discography list="Fala-me de Amor" />
      <Discography list="Baby Face" />
      <Discography list="Dor de Cotovelo" />
      <Discography list="Garoto Último Tipo" />
      <Discography list="As Coisas que Eu Gosto" />
      <Discography list="Mesmo de Mentira" />
      <Discography list="Amor Amor" />
    </div>
  );
}

export default App;
