//Funktiolla listätään uusi tehtävä taulukkoon
function addTask() {
    //Haetaan käyttäjän kirjottama teksti HTML:n tekstikentästä
    let taskName = document.getElementById("taskName").value;

    //Tarkistetaan, ettei käyttäjä yritä lisätä tyhjää tehtävää
    if (taskName == "") {
        alert("Enter a task");
        return; //keskeytetään suoritus, jos kenttä on tyhjä
    }

    //luodaan uusi tehtävä
    let task = {
        name: taskName, //tallennetaan tehtävän nimi
        created: new Date(), //tehtävän luontiajankohta
        status: "Not started" //oletustilaksi Not started

    }

    //tallennetaan uusi tehtävä taulukkoon
    tasks[tasks.length] = task;

    //tyhjennetään tekstikenttä onnistuneen lisäyksen jälkeen
    document.getElementById("taskName").value = "";

    //päivitetään tehtävälistaa
    refreshlist();

    // tulostetaan tehtävät konsoliin testausta varten
    console.log(tasks);



}




