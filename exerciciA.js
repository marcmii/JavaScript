let x = Number(prompt('Pensa un numero del 1 al 4', ""));
   let aleatori = Math.floor(Math.random() * 4) + 1; //retorna un número entre 1 i 4

   const missatge = x == aleatori ? "Bravo" : "Que mal" ;
   alert(missatge);