import React from "react";
import Perfil from "./imagensPortfolio/perfil.png"
import Insta from "./imagensPortfolio/insta.png"
import Link from "./imagensPortfolio/link.png"
import * as S from "./Style.jsx"

function Inicio(){
  return(

    <S.Inicio>

    <img src={Perfil} alt="imagem inlustrativa de um desenho feminino" />
    <h2> Ola! Eu Sou Hellen Pinheiro.</h2>
    <p>"Um Homen Com Deus é Sempre a Maioria!John Knox."</p>

    <S.Sociais>
    <img src={Link} alt="icone do linkedin" />
    <img src={Insta} alt="icone do instagran" />
    </S.Sociais>
    
    </S.Inicio>
  )
}

export  default Inicio