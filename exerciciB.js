    let avui = new Date().toLocaleDateString("es-ES");
    // busquem el id dia i hi posem la data
    document.getElementById("dia").innerHTML = avui;

    // Demanen identificació d'usuari i password
    let user = prompt("Posa el usuari", "usuari");
    let psswd = prompt("Posa la contrasenya", "contrasenya");

    // si l'usuari no és correcte missatge d'error
    if (user == "admin" && psswd == 1234) {
        alert("Usuari i Contrasenya correctes");
    } else if (user == "alum" && psswd == "pepe") {
        alert("Usuari i Contrasneya correctes");
    } else {
        alert("Error Password");
    }

    // si l'usuari és correcte mirem quin usuari és
    if (user == "admin" && psswd == 1234) {
        alert("T'has registrat amb l'usuari: ADMIN");
    } else if (user == "alum" && psswd == "pepe") {
        alert("T'has registrat amb l'usuari: ALUM");
    }

    // si és el admin mostrem les seves tasques al id de tasques
    if (user == "admin" && psswd == 1234) {
        document.getElementById("tasques").innerHTML = 
        `<p>Fer un PDF</p> <p>Buscar Bugs</p> <p>Anar al cine</p>`
    } 
    
    // si és el alum mostrem les seves tasques al id de tasques
    if (user == "alum" && psswd == "pepe") {
        document.getElementById("tasques").innerHTML = 
        `<p>Fer deures</p> <p>Menjar una burguer</p> <p>Escoltar musica horrible a tot volum</p>`
     }