
import Image from './imagem/manga.jpg'
import Imagem from'./imagem/hinata.jpg' 
import './App.css';
import Post from './components/post';
import Coment from './components/comentario';

function App() {
  return (
    <div className="App">
       <Post 
      imagem={Image}
      titulo='Haikyuu – Filme ganha 1º trailer e data de estreia'
      descricao='Durante o evento Haikyuu!! Festa 2023, foi liberado o 1º trailer para o primeiro de dois filmes que irão adaptar o mangá de Haikyuu'
      categoria='Categoria: Anime'
      />
<div className='juntar'>
<Coment

      img={Imagem}
      nome='Shoyo Hinata'
      comentario='Espero que gostem pessoal! A galera toda se esforçou demais para entregar o melhor para vocês'
      />
   </div>
    </div>
  );
}

export default App;
