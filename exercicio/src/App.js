
import Image from './img/manghaykiu.jpg'
import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
       <ProductCard 
      imagem={Image}
      nome='Mangá Haykiu - Vol. 1 e Vol. 2'
      descricao='Mangá de esporte escrito e desenhado por Furudate Haruichi. Após se interessar pelo voleibol devido a transmissão de um jogo do campeonato nacional, o estudante Shouyou Hinata começa a praticar o esporte tentando seguir os passos do ídolo da disputa que, da mesma forma que ele, tem estatura baixa.'
      preco='R$ 98,99'
      caracteristicas='Poster + Edição limitada + Vem com brinde'
      />
   
    </div>
  );
}

export default App;
