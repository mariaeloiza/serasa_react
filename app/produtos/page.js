import Menu from "./components/Menu";
import Produto from "./components/Produto";

function Produtos(){


    return ( 

        <div>

            <Menu/>
            
            <h1>Produtos</h1>
            <p>Bem-vindo a página de produtos😁</p>

            <hr/>
    
            <Produto nome ="Maça" preco="3,99" desconto="20" comprar={true} />
            <Produto nome ="Uva" preco="5,99" comprar="20" />
            <Produto nome ="Pera" preco="4,99" desconto="45" />

        </div>

        
    );
}

export default Produtos;