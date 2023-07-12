document.getElementById("workout-form").addEventListener("submit", addExercise);

function addExercise(e) {
  e.preventDefault();
  
  var exerciseInput = document.getElementById("exercise");
  var durationInput = document.getElementById("duration");
  
  var exercise = exerciseInput.value;
  var duration = parseInt(durationInput.value);
  
  if (exercise !== "" && !isNaN(duration)) {
    var logList = document.getElementById("log-list");
    
    var listItem = document.createElement("li");
    listItem.innerHTML = exercise + " (" + duration + " minutes)";
    
    logList.appendChild(listItem);
    
    var totalMinutes = parseInt(document.getElementById("total-minutes").textContent);
    var count = parseInt(document.getElementById("count").textContent);
    
    totalMinutes += duration;
    count++;
    
    document.getElementById("total-minutes").textContent = totalMinutes;
    document.getElementById("count").textContent = count;
    
    exerciseInput.value = "";
    durationInput.value = "";
  }
}
