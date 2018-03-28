$(document).ready(function() {

  // Object of tasklists
  var task = [
    "Your Mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiousity",
    "People can rarely upset you",
    "It is often difficult for you to relate to other people's feelings.",
    "In a discussion, truth should be more important than people's sensitivities.",
    "You rarely get carried away by fantasies and ideas",
    "You think that everyone's views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people"
  ];

  var qn = 0

  var taskDiv = [];

  // Loop through each element in task and create table row  
  task.forEach( t => {
    qn++;
    // Creating div/writing to display task data
    taskDiv.push($("<h3>").text(`Question ${qn}`));
    taskDiv.push($("<h4>").text(t));
    // var btnDiv = $("<div class='dropdown'>")
    // btnDiv.push($("<button>"))
    // taskDiv.push(btnDiv)
  })

  // Append taskDiv to tableData div
  $("#tableData").append(taskDiv);
})