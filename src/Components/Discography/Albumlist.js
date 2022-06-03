import React from 'react'

export default function Albumlist() {

    const albumOne = [
      "Dá Sorte",
      "Sonhando",
      "Murmúrio",
      "Tu Serás",
      "Samba Feito pra Mim",
      "Fala-me de Amor",
      "Baby Face",
      "Dor de Cotovelo",
      "Garoto Último Tipo",
      "As Coisas que Eu Gosto",
      "Mesmo de Mentira",
      "Amor Amor",
    ];

    const albumTwo = [
      "Poema",
      "Pororó-popó",
      "Dá-me um beijo",
      "Nos teus lábios",
      "Vou comprar um coração",
      "Meu pequeno mundo de ilusão",
      "Las secretárias",
      "Saudade é recordar",
      "Pizzicati-Pizzicato",
      "Canção de enganar",
      "Confissão",
      "Podes voltar",
    ];

    const albumThree = [
      "Alô Saudade",
      "Sem Teu Amor",
      "Saudade e Carinho",
      "Saudade e Carinho",
      "Mania de Gostar",
      "Manhã de Amor",
      "Se Você Quiser",
      "Há uma História Triste",
      "Domingo em Copacabana",
      "Meus Olhos",
      "Mundo de Paz",
      "O Bem do Amor",
    ];

    const albumFour = [
      "Reza",
      "Menino das Laranjas",
      "Por um Amor Maior",
      "João Valentão",
      "Maria do Maranhão",
      "Resolução",
      "Sou sem Paz",
      "Consolação/Berimbau/Tem dó",
      "Aleluia",
      "Eternidade",
      "Preciso Aprender a Ser Só",
      "Último Canto",
    ];

    const albumFive = [
      "Zambi",
      "Aruanda",
      "Canção do Amanhecer",
      "Só Eu Sei o Nome",
      "Esse Mundo É Meu / Resolução",
      "Samba Meu",
      "Expresso Sete",
      "Té o Sol Raiar",
      "Chuva",
      "Amor Demais",
      "Samba Novo",
      "Chegança",
    ];

    const albumSix = [
      "Pot-Pourri",
      "Canto De Ossanha",
      "Tristeza",
      "Tristeza Que Se Foi",
      "São Salvador,Bahia",
      "Louvação",
      "Upa,Neguinho",
      "Mascarada",
      "Sonho De Um Carnaval",
      "Amor Até O Fim",
      "Santuário Do Morro",
    ];

    const Albumlistone = albumOne.map(listOne => <li>{listOne}</li>)
    const Albumlisttwo = albumTwo.map((listTwo) => <li>{listTwo}</li>);
    const Albumlistthree = albumThree.map(listThree => <li>{listThree}</li>)
    const Albumlistfour = albumFour.map(listFour => <li>{listFour}</li>)
    const Albumlistfive = albumFive.map((listFive) => <li>{listFive}</li>);
    const Albumlistsix = albumSix.map((listSix) => <li>{listSix}</li>);

}
