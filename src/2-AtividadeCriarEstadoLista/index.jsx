// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.
 import { useState } from "react";
 
export default function Home() {
  const [ listaProdutos, setProdutos] = useState({
    { id: 1, nome:'Leo mandou flores', preco: 'R$ 3,99'}
    { id: 2, nome:'Astral', preco: 'R$ 3,99'}
    { id: 3, nome:' Geração CTRL Z', preco: 'R$ 3,99'}
    { id: 4, nome:' A aurora revelada', preco: 'R$ 3,99'}
  })

  return (
    <div>
         <h1>Escolha o esmalte ideal</h1>
    </div>
   
  );
}

