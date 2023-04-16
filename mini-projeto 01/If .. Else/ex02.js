// If .. Else

//Se a hora estiver entre 06:00 até 12:00 : Bom Dia!
//Se estiver entre 12:00 até 18:00 : Boa Tarde!
//Caso contrário : Boa Noite!
let hora = 20;

if (hora > 6 && hora < 12) {
  console.log('Bom Dia!');
}else if (hora > 12 && hora < 18) {
  console.log('Boa Tarde!');
}else{
  console.log('Boa Noite!');
}