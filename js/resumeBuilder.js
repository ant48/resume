/*
  This JS file inputs/displays the content dynamically on the resume html site
  */

var bio = {
  name: "Nhu Tran (Annie)",
  role: "Front-end Developer",
  contacts: {
    mobile: "934-7770",
    email: "nntran1748@gmail.com",
    github: "annient48",
    location: "Greenbrier"
  },
  welcomeMessage: "To work with an organization where my skills and educational are being utilized as well as enhanced.",
  skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "SQL"],
  biopic: "../images/LinkedIn_picture-small.jpg"
};

bio.display = function() {
  /********* header ***********/
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  //contacts in header
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

  //welcome message & bio picture
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  //skills
  if (bio.skills.length > 0) {
    //print "Skills at a Glance"
    $("#header").append(HTMLskillsStart);
    //print list of skills
     for (var i = 0; i < bio.skills.length; i++) {
       var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
       $("#skills").append(formattedSkill);
     }
  }

  //contacts in footer
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
};


var work = {
  jobs: [
    {
      title: "Dell IT HelpDesk",
      employer: "Apex Systems",
      location: "Nashville",
      dates: "October 2017 - February 2018",
      description: "Performed remote troubleshooting on Boeing's break/fix related issues via phone and Bomgar chat as well as provided other co-workers technical support.",
      url: "https://www.apexsystems.com"
    },
    {
      title: "Middleware Solutions Intern",
      employer: "BlueCross BlueShield of TN",
      location: "Chattanooga",
      dates: "May 2015 - August 2015",
      description: "Detected and analyzed XMLDecode errors in XenApp environment to support Facets production users.",
      url: "https://www.bcbst.com"
    },
    {
      title: "Technical Writing Intern",
      employer: "myTech HelpDesk at TTU",
      location: "Cookeville",
      dates: "January 2015 - May 2015",
      description: "Provided staff with training handbook and troubleshooting reference manual.",
      url: "https://www.tntech.edu"
    }
  ]
};

work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
    //
    $("#workExperience").append(HTMLworkStart);

    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer).replace("#", work.jobs[i].url);
    var formattedWorkTime = HTMLworkDates.replace("%data%", work.jobs[i].dates);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkTime);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedWorkDescription);
  }
};

var projects = {
  projects: [
    {
      title: "Movie Trailer Website",
      description: "Developed a collaboration of python files to generate an HTML page with a gallery of my favorite movies and TV shows.",
      url: "https://annient48.github.io/movie-trailer/main_display.html",
      images: ["../images/movie-trailer-small.jpg"]
    },
    {
      title: "Bookmark App",
      description: "Built a simple bookmark application with JavaScript to add, display, and delete favorite sites.",
      url: "https://github.com/annient48/bookmark-app",
      images: ["../images/bookmark-small.jpg"]
    },
    {
      title: "Pixel Art maker",
      description: "Developed an interface that allows user to create a table grid canvas and to paint each individual cell within that table using colors they choose with the color input type.",
      url: "https://annient48.github.io/pixel-art/index.html",
      images: ["../images/pixel-maker-small.jpg"]
    },
    {
      title: "Memory Game",
      description: "Create a grid of 16 face-down cards with 8 pairs of matches using just plain Javascript.",
      url: "https://github.com/annient48/memory-game",
      images: ["../images/matching-game-small.jpg"]
    }
  ]
};

projects.display = function() {
  for (var p = 0; p < projects.projects.length; p++) {
    $("#projects").append(HTMLprojectStart);

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title).replace("#", projects.projects[p].url);
  //  var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);

    $(".project-entry:last").append(formattedProjectTitle);
    //$(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);

    //loop to display the array of images
    if (projects.projects[p].images.length > 0) {
      for (var i = 0; i < projects.projects[p].images.length; i++) {
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
        $(".project-entry:last").append(formattedProjectImages);
      }
    }
  }
};

var education = {
  schools: [
    {
      name: "Tennessee Technological University",
      location: "Cookeville",
      degree: "BS",
      majors: ["Computer Science"],
      dates: "Fall 2012 - August 2015",
      url: "https://tntech.edu"
    }
  ],
  onlineCourses: [
    {
      title: "Full Stack javaScript",
      school: "Treehouse",
      dates: "February 2018 - current",
      url: "www.teamtreehouse.com"
   }
  ]
};

education.display = function() {
  for (var s = 0; s < education.schools.length; s++) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[s].name).replace("#", education.schools[s].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[s].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[s].dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[s].location);
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

    $(".education-entry").append(formattedSchoolNameDegree);
    $(".education-entry").append(formattedSchoolDates);
    $(".education-entry").append(formattedSchoolLocation);

    if (education.schools[s].majors.length > 0) {
      for (var m = 0; m < education.schools[s].majors.length; m++) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[s].majors[m]);
        $(".education-entry").append(formattedSchoolMajor);
      }
    }
  }

  if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
      $("#education").append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", 'http://' + education.onlineCourses[i].url);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", 'http://' + education.onlineCourses[i].url);
      var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

      $(".education-entry:last").append(formattedOnlineTitleSchool);
      $(".education-entry:last").append(formattedOnlineDates);
      $(".education-entry:last").append(formattedOnlineURL);
    }
  }
};


$("#header").prepend(internationalizeButton);

function inName() {
    var array = bio.name.split(" ").slice(0, 2);
    var otherName = bio.name.split(" ").slice(2); //get the part (Annie)
    array[1] = array[1].toUpperCase();
    array[0] = array[0].slice(0,1).toUpperCase() + array[0].slice(1).toLowerCase();
    var internationalName = array.join(" ") + " " + otherName;

    return internationalName;
}



/****************** Display *******************/
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
