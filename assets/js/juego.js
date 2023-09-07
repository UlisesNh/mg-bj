

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ["A", "J", "Q", "K"];
const btnPedir = document.querySelector('#pedirCarta');
const btnCarta = document.querySelector('#jugador-cartas');
const puntos = document.querySelector('small');
let puntosJugador = 0;


const crearDeck = () => {

    for(i=2; i<= 10; i++){
       for( let tipo of tipos){
        deck.push(i + tipo);
       }
    }
        for( let tipo of tipos){
            for(let esp of especiales){
                deck.push(esp + tipo);
            }
        }
        console.log(deck);
        deck = _.shuffle(deck);
        console.log(deck);
        return(deck);
     }
     
crearDeck();

const pedirCarta = () => {
  if (deck.length === 0 ){
    throw 'No hay mas cartas en el deck'
  };
  const carta = deck.pop();
  console.log(carta) ;
  return carta;
  
}

const verCarta = (carta) => {
  const valor = carta.substring(0, carta.length -1);
  return( isNaN( valor ) )? 
    (valor === 'A') ? 11 : 10 
    : Number(valor);
}
const valor = verCarta(pedirCarta());
console.log({valor});

btnPedir.addEventListener('click', () => {
  const carta = pedirCarta();
  puntosJugador = puntosJugador + verCarta( carta );
  puntos.innerText = puntosJugador;

  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`;
  imgCarta.classList.add('carta')
  btnCarta.append (imgCarta);
} )




