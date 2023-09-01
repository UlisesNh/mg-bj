

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ["A", "J", "Q", "K"];

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



