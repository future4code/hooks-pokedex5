import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }

    #root,body,html{
        background-color:rgba(0,0,0,.2);
        min-width:100vw;
        min-height:100vh;
        overflow-y:scroll;
        scrollbar-width: none;
        -ms-overflow-style: none; 

        &::-webkit-scrollbar{
            width:0;
            height:0;
        }

        font-family: 'Roboto', sans-serif;
        color:#fafafa;
        //reset every button styles
        button{
            font-family:inherit;
        }
    
    //colors----------------------------
        --normal:#A8A878;
        --fighting:#C03028;
        --flying:#A890F0;
        --poison:#A040A0;
        --ground:#E0C068;
        --rock:#B8A038;
        --bug:#A8B820;
        --ghost:#705898;
        --steel:#B8B8D0;
        --fire:#F08030;
        --water:#6890F0;
        --grass:#78C850;
        --electric:#F9D030;
        --psychic:#F85888;
        --ice:#98D8D8;
        --dragon: #7038F9;
        --dark:#705848;
        --fairy:#DE2491; 
    };
`;