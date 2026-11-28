//Funktio koostaa tiedon, kuinka moni tehtävistä on
//Not started
//In progress ja
//Done tilassa
//Tieto palautetaan sitä kutsuneelle taholle
function showReportByStatus(allTasks) {
     let notStartedCount = 0;
    let inProgressCount = 0;
    let doneCount = 0;
    for(let i = 0; i < allTasks.length; i++){
        if(allTasks[i].status === "Not started") {
            notStartedCount++;
        } else if(allTasks[i].status === "In progress") {
            inProgressCount++;
        } else if(allTasks[i].status === "Done") {
            doneCount++;
        }
    }
    return {
        notStarted: notStartedCount,
        inProgress: inProgressCount,
        done: doneCount
    };
}
