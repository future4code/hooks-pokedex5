# POKEDEX
## Hooks grupo 5 



## 🚀 Resumo


A ideia é que usemos a [Poke Api](https://pokeapi.co/) como fonte de dados para o projeto. Ela é uma API pública, bastante utilizada como fonte de dados para aplicações focadas em aprendizado de programação. É também uma API particularmente comum em Cases de Processos Seletivos. 

O projeto deve ter as seguintes **três páginas:**

1. **Home:** o usuário deve receber uma lista de pokemons vinda da API. Ele pode armazenar Pokemons em sua Pokedex clicando em cada um.
2. **Pokedex:** o usuário deve pode ver os Pokemons que foram adicionados em sua Pokedex. 
3. **Detalhe do Pokemon:** Deve ser possível ir para uma página de detalhes do Pokemon ao clicar no mesmo, estando tanto na Home quanto na Pokedex.

 
### 📋  Requisitos


### Página 1 - Home

Essa é a página inicial do site. Ela é responsável por **mostrar a lista de Pokemons ao usuário**. Essa lista deve conter **ao menos** **20 Pokemons**. Cada Pokemon será representado por um Card.
Em cada card de Pokemon deve haver um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon.

Além disso, no header dessa página, deve haver um botão para acessar a página da Pokedex.

Observações importantes:

- Ao clicar no botão de adicionar, o card do Pokemon clicado deve desaparecer da tela, para que o usuário não consiga adicionar duas vezes o mesmo Pokemon. Outra opção (mais difícil) é trocar o botão de "Adicionar" para "Remover", e tratar o comportamento diferente.


### Página 2 - Pokedex

A página da Pokedex do usuário será bem parecida com a página inicial. A diferença é que a lista de Pokemons que será renderizada na tela não virá diretamente da API, mas sim dos Pokemons previamente selecionados pelo próprio usuário.

Ou seja, na página inicial, o usuário pode clicar no botão "adicionar" de determinado Pokemon, e esse Pokemon deve aparecer na página Pokedex.

Não existe um endpoint específico na Poke API para que isso seja feito. Ou seja, você deve criar a lógica de adicionar os Pokemons em um array para ser renderizado na Pokedex. Não é necessário que a Pokedex fique armazenada em nenhum servidor ou banco de dados.

Em cada card de Pokemon deve haver um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon. (Ou seja, um componente bastante semelhante ao utilizado na Home)

Além disso, no header dessa página, deve haver um botão para voltar para a Home, página com a lista de Pokemons vinda da API.
Observações importantes:

- Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex. Como descrito anteriormente, você pode tratar esse ponto removendo-os da Home, ou alterando o botão no Card da Home para mostrar "Adicionar" ou "Remover" de acordo com o estado do Pokemon (dentro ou fora da Pokedex).

### Página 3 - Página de detalhes

Quando o usuário clicar para ver os detalhes de algum Pokemon específico, deve abrir a seguinte página, com as informações descritas no seguinte wireframe:

Observação importante: 

- No cabeçalho, além de um botão de voltar para a última página que o usuário estava, haverá um botão (na direita) para adicionar ou remover da Pokedex a partir da página de detalhes. Esse botão deve verificar se o Pokemon detalhado já está na Pokedex ou não e, a partir disso, adicionar ou remover o Pokemon da Pokedex.
Todas essas informações solicitadas no wireframe estão disponíveis no endpoint de detalhes do Pokemon. Procure por esse endpoint na documentação da API, e use o Postman para testar e entender seu funcionamento.

### 🔧 Imagens e estrutura 
 
 ![image](https://user-images.githubusercontent.com/98292838/178165400-bff029f5-0bc8-4923-ae00-90d1c18c026c.png)
![image](https://user-images.githubusercontent.com/98292838/178165409-52bfaa5c-bc83-4448-bb39-c622fba7adc5.png)
![image](https://user-images.githubusercontent.com/98292838/178165417-3636cb73-424d-4809-95c1-8c0d21c280b9.png)



## 🛠️ Construído com

<p>
<img witdh="40px" height="40px" src="https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png">
<img witdh="40px" height="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"> 
<img witdh="40px" height="40px" src="https://user-images.githubusercontent.com/98292838/163856370-844eb1b7-11f6-48cd-abec-21c1da4b38b4.png">
<img witdh="40px" height="40px" src="https://user-images.githubusercontent.com/98292838/163856432-c20873d2-9b31-412e-92e9-a1f6c609b40c.png">
<img witdh="40px" height="40px" src="https://user-images.githubusercontent.com/98292838/163856484-18282144-9061-42ee-9691-66c6454b362f.png">
<img witdh="40px" height="40px" src="https://user-images.githubusercontent.com/98292838/163856535-00dbc8fe-e415-4fa3-8d81-50975fb8839c.png">
</p>

## 🔗 Link Surge: https://pokedex-hooks-5.surge.sh


## ✒️ Autores

* [**Gabriel Antunes**](https://github.com/antilt-dev)
* [**Giovanna Galhardo**](https://github.com/giojulio)
* [**Walmir Junior**](https://github.com/Walmir-Junior)


