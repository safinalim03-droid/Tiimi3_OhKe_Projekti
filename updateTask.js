//Funktio päivittää valitun tehtävän statustiedon sekä päivitysajankohdan
function updateTask() {
    
    let taskName = document.getElementById("updateTaskName").value;
    let newStatus = document.getElementById("newStatus").value;

    if (tasks.some(t => t.name === taskName)) {
        let task = tasks.find(t => t.name === taskName);
        task.status = newStatus;
    }

    document.getElementById("reportArea").innerHTML = taskName + " - " + newStatus;

}
