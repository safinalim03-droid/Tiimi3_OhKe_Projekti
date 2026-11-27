//Funktio päivittää tehtävälistan (task list)
function refreshList() {

    // muuttuja näytettävää tekstiä varten
    let teksti = "";

        // käydään kaikki tasks-taulukon tehtävät läpi
        for (let i = 0; i < tasks.length; i++) {
            //Lisätään tehtävän nimi ja status listaan   
            teksti += tasks[i].name + " - " + tasks[i].status + "<br>";
    }

    // tulostetaan tehtävälista taskList-elementtiin
    document.getElementById("tasksList").innerHTML = teksti;
}

