let varGlobal = 5;
    let suma = (a, b) => { return (a + b) };
    let expo = () => { return (varGlobal ** 2) };
    let saluda = () => { document.getElementById("demo4").innerHTML = "Hola!" };
    let peix = (dibuixa, vegades) => {
    let retorna = "";
        for (let i = 0; i < vegades; i++) {
            retorna = rotrna + dibuixa + "<br><br>";
        } return (retorna);
    };
    document.getElementById("demo").innerHTML = `${suma(2, 5)}`;
    document.getElementById("demo2").innerHTML = `${peix("><((((*>", 3)}`;
    document.getElementById("demo3").innerHTML = `${expo()}`;
    saluda();