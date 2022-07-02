import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    flex:none;
    width:250px;
    height:300px;
    min-width:250px;
    min-height:300px;
    padding:10px;
    border-radius:20px;
    transition:0.5s;
    gap:30px;
    cursor:pointer;
    background-color:${(props)=>`var(--${props.color})`};
    color:rgba(0,0,0,.5);

    &:hover{
        transform:scale(1.05);

        div{
            img{
                animation:hoverImg 1s .5s infinite;
            }
        }
        }

    @keyframes hoverImg {
            0%{
                transform:translateY(0) scale(1);
            }50%{
                transform:translateY(-10px) scale(1.1);
            }100%{
                transform:translateY(0) scale(1);
            }
    }
   

    div:nth-child(1){
        width:100%;
        height:60%;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:white;
        border-radius:20px;

        img{
        width:70%;
        max-height:90%;
        }
    };
    
    div:nth-child(2){
        width:90%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center;
        gap:5px;
        
        
        div{
            width:100%;
            height:100%;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:space-between;

            button{
            min-width:40%;
            font-size:18px;
            padding:8px;
            background-color:transparent;
            border-radius:10px;
            border:none;
            cursor:pointer;
            color:rgba(0,0,0,.5);
            
            &:hover{
                background-color:rgba(255,255,255,.1);
            }
        }
        }
        
    }
`;