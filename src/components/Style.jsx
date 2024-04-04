import  styled from "styled-components"

export const Naveg = styled.nav`
background-color: orange

`

export const Unidade = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 20vh;
list-style: none;
font-family: "Playball", cursive;

a{
    text-decoration: none;
    color:black;
    font-size: 2rem;
}

a:hover{
    color:white;
    font-weight:800;
    
}
    

`
export const Inicio = styled.main`
background-color: grey;
display:flex;
justify-content: space-evenly;
flex-direction: column;
align-items:center;
height: 80vh;
font-family: "Playball", cursive;
img{ 
    border-radius: 50%; 
}
`

export const Sociais = styled.div`
width: 30vw;
display: flex;
justify-content:center;
img{
    width: 3vw;
}
`

export const Sobre = styled.main`
display:flex;
justify-content:space-evenly;

`
export const Estudos = styled.section`

display: flex;
flex-direction: column;
align-items: center;
font-family: "Playball", cursive;
justify-content: space-evenly;
height: 50vh;
width: 30vw;

img{
    height: 7vh;
}
`
export const Habilidades = styled.section`

height: 50vh;
width: 30vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
font-family: "Playball", cursive;
div{
    display: flex;
    align-items:
}

img{
    height: 7vh;
}
`