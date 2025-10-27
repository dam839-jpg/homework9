console.log("Hello World!");

// My variables
const fullName = "Devan Martin";
let hasDownloadedResume = true;
const downloadAlert = document.getElementById('resume-download');
const outputElement = document.getElementById('output-area');

// Resume download function. Only displays alert on first time clicking
downloadAlert.addEventListener('click', function() {
  if(hasDownloadedResume) {
    alert('Your resume is downloaded successfully!');
    hasDownloadedResume = false;
  }
});

// Creating and calling showGreeting() function
function showGreeting(name) {
  return "Hello, my name is " + name + "! Welcome to my portfolio!";
}

let myName = "Devan Martin";
outputElement.textContent = showGreeting(myName);


// Days until deadline function
function daysUntilDeadline(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
  return Math.ceil(daysDifference);
}

let startDate = '2025-10-14';
let endDate = '2025-11-01';
console.log(daysUntilDeadline(startDate, endDate));

// Homework 9 code beginning

// 1) Navigation Bar
let navItems = ["Me", "Education", "Projects", "Skills"]; // array

$(document).ready(function() { // jQuery to display the navItems in the array
  const navMenu = $("#nav-menu");

  navItems.forEach(item => {
    const listItem = $("<li></li>");
    const link = $(`<a href="#${item.toLowerCase()}">${item}</a>`);

    listItem.append(link);
    navMenu.append(listItem);
  });
});


const skillForm = document.getElementById("skill-form");
const skillInput = document.getElementById("skill");
const outputContainer = document.getElementById("output-container");

// 2) This function adds text to an output container on the webpage when 
// clicking the submit button. It also adds the text to the skillList array.
skillForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents reloading page
  
  const skillText = skillInput.value; // stores the value of input in a variable
  const newParagraph = document.createElement('p'); // creates a p element 

  newParagraph.textContent = skillText; // adds skillText content into p element
  outputContainer.appendChild(newParagraph); // adds p element to the output container

  skillList.push(skillText);

  skillInput.value = ""; // removes the content from the input box
});

// 3) This allows smooth scrolling
$(document).ready(function() {
  
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const target = $(this.hash);
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800);
    }
  });

  // 4) Click on a skill div to edit it
  $("#output-container").on("click", ".skill", function() {
    // Skip if already in edit mode
    if ($(this).find("input").length > 0) return;

    let currentText = $(this).contents().get(0).nodeValue.trim();
    let input = $('<input type="text">').val(currentText);
    $(this).html(input); // replace text with input field
    input.focus();

    // Save the new value when pressing Enter or losing focus
    input.on("keypress blur", function(e) {
      if (e.type === "blur" || e.which === 13) {
        let newText = $(this).val().trim();
        if (newText !== "") {
          $(this).parent().html(newText + ' <button class="delete">Delete</button>');
        } else {
          // Optional: keep old text if input is empty
          $(this).parent().html(currentText + ' <button class="delete">Delete</button>');
        }
      }
    });
  });

  // 5) Delete button
  $("#output-container").on("click", ".delete", function(e) {
    e.stopPropagation(); // prevent triggering the div click
    $(this).parent().fadeOut(300, function() {
      $(this).remove();
    });
  });
});

// 6) Project data as an array of objects
const projectsData = [
  {
    title: 'Previous Project Portfolio',
    description: 'This was my most recent project. It is also a portfolio about me.',
    deadline: 'September 1st'
  },
  {
    title: 'Older Project Portfolio',
    description: 'This was an older portfolio I made about me.',
    deadline: 'October 1st'
  },
  {
    title: 'Ongoing Project',
    description: 'The deadline for this project is November 1st, 2025.',
    deadline: 'November 1st'
  }
];

// 7) jQuery function that uses for loop to display project cards
$(document).ready(function() {
  const $projectsSection = $('#projects-section');
  
  // Clear existing content
  $projectsSection.empty();
  
  // Iterate through projects array and create cards
  for (let i = 0; i < projectsData.length; i++) {
    const project = projectsData[i];
    
    // Create card elements using jQuery
    const $card = $('<div>')
      .addClass('card mb-4')
      .css('width', '18rem');
    
    const $cardBody = $('<div>')
      .addClass('card-body');
    
    const $title = $('<h5>')
      .addClass('card-title')
      .text(project.title);
    
    const $description = $('<p>')
      .addClass('card-text')
      .text(project.description);
    
    const $deadline = $('<p>')
      .addClass('card-text')
      .html('<small class="text-muted">Deadline: ' + project.deadline + '</small>');
    
    // Add status paragraph
    const $status = $('<p>')
      .addClass('card-text')
      .html('<strong id="project' + (i + 1) + '-status"></strong>');
    
    // Assemble card
    $cardBody
      .append($title)
      .append($description)
      .append($deadline)
      .append($status);
    
    $card.append($cardBody);
    
    // Add card to projects section
    $projectsSection.append($card);
  }
});

// Homework 9 code ending


// Project status

const project1Deadline = new Date('2025-09-01');
const project2Deadline = new Date('2025-10-01');
const project3Deadline = new Date('2025-11-01');

const currentDate = new Date();


// Set static project statuses
let project1Status = 'Complete';
let project2Status = 'Complete';
let project3Status = 'Ongoing';



const status1DisplayElement = document.getElementById('project1-status');
const status2DisplayElement = document.getElementById('project2-status');
const status3DisplayElement = document.getElementById('project3-status');

status1DisplayElement.textContent = project1Status;
status2DisplayElement.textContent = project2Status;
status3DisplayElement.textContent = project3Status;

// Resume download button click tracker
const buttonClickContainer = document.getElementById('button-click-container');
const resumeButton = document.getElementById('resume-download');
let resumeDownloads = 0;

buttonClickContainer.textContent = resumeDownloads;

resumeButton.addEventListener('click', function() {
  resumeDownloads++;
  buttonClickContainer.textContent = resumeDownloads;
});

// Tables of education and experience
const experience = [
  { role: "Student", class: "CS212", timeline: "August 25-December 12, 2025"}
];

const education = [
  { institution: "Northern Arizona University", description: "Pursuing a bachelor's degree in software engineering.", timeline: "2025-2028"},
  { institution: "Paradise Valley Community College", description: "Attended for my freshman year of college.", timeline:"2024-2025" },
  { institution: "Gateway Academy", description: "Attended this high school for my junior and senior years of high school.", timeline: "2022-2024" },
  { institution: "Cactus Shadows High School", description: "Attended for my freshman and sophomore years of high school.", timeline: "2020-2022" }
];

function createTable(data, containerId, titleText) {
  const container = document.getElementById(containerId);

  const title = document.createElement('h2');
  title.textContent = titleText;
  container.appendChild(title);

  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  const headerRow = document.createElement('tr');
  const keys = Object.keys(data[0]);

  keys.forEach(key => {
    const th = document.createElement('th');
    th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
    th.style.border = '1px solid black';
    th.style.padding = '4px';
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  data.forEach(item => {
    const row = document.createElement('tr');
    keys.forEach(key => {
      const td = document.createElement('td');
      td.textContent = item[key];
      td.style.border = '1px solid black';
      td.style.padding = '4px';
      row.appendChild(td);
    });
    table.appendChild(row);
  });

  container.appendChild(table);
}

// Create both tables
createTable(experience, 'experience-table', 'Experience');
createTable(education, 'education-table', 'Education');