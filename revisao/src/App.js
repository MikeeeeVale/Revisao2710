import ProfileImage from './components/ProfileImage';
import Imagem from './img/killua.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfileImage 
      titulo='Killua Zoldyck'
      imagem={Imagem}
      alt='Killua com os olhos fechados'
      />
   
    </div>
  );
}

export default App;
