var bio = {
	"name": "David Wilkie",
	"role": "Software &amp; Web Engineer",
	"contacts": { "email": "davey@ktuh.org",
				  "github": "@daveyshindig",
			  	  "location": "Honolulu, Hawaii",
				  "twitter": "@ktuh",
				  "mobile": "808.391.8983",
				  "blog": "http://daveywilkie.blogspot.com"
	},
	"photo_url": "img/davey-1.jpg",
	"welcomeMessage": "Aloha, my name is David Wilkie. Friends call me Davey, or Dave. Thank you for visiting my online résumé. I am a new graduate from the Information & Computer Sciences program at the University of Hawaii at Manoa. This month, I am finishing work at the Hawaii Natural Energy Institute, where I've been employed for the last year on a grant-funded study of the smart energy grid. Currently, I am in the online school Udacity's front-end web development nanodegree program, and I am now on the job hunt. In the near future I hope to find gainful employment as a software or web developer, while continuing to formally study more math and computer science.",
	"skills": [
		"yoga",
		"Japanese",
		"French",
		"computer science",
		"cooking"
	],
	displayBio: function displayBio() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedEmail = HTMLmobile.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		var formattedContacts = formattedMobile + formattedEmail + formattedBlog + formattedGithub
							  +  formattedTwitter + formattedLocation;
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.photo_url);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#topContacts").append(formattedContacts);
		$("#footerContacts").append(formattedContacts);
		$("#header").append(formattedName + formattedRole + formattedBioPic + formattedWelcome);
	}
};

var work = {
	"jobs": [
		{
			"employer": "Hawaii Natural Energy Institute",
			"title": "Project IT Assistant",
			"location": "Honolulu, Hawaii",
			"dates": "November 2013 - October 2014",
			"description":  [
				"Converts data to knowledge by writing Python and PostgreSQL scripts to analyze & audit energy use", 
				"Writes and maintains open-source, data science software hosted on Git and Github", 
				"Administers an Ubuntu server and Postgres database, as well as the local area network hardware"
			]
		},
		{
			"employer": "KTUH FM",
			"title": "Webmaster",
			"location": "Honolulu, Hawaii",
			"dates": "April 2012 - Present",
			"description": [
				"Deployed custom web applications on Google App Engine and Heroku",
				"Administers WordPress-driven site; writes PHP templates; now rebuilding website with mobile-responsive web design tools such as HTML5, LESS for CSS, JavaScript and jQuery",
				"Developed KTUH’s iOS app prototype with streaming media and social networking affordances"
			]
		},
		{
			"employer": "The United States Peace Corps",
			"title": "Volunteer",
			"location": "Cambodia",
			"dates": "2008 - 2009",
			"description": [
				"Educated secondary-school students in English, trained local teachers in current pedagogic practices",
				"Designed and managed projects in community and youth development",
				"Promoted world peace and international friendship through the sharing of culture and values"
			]
		},
		{
			"employer": "Nanyou Chuugaku Middle School",
			"title": "English Teacher",
			"location": "Nagoya, Japan",
			"dates": "2009 - 2010",
			"description": [
				"Educated middle-schoolers in English and studied the Japanese language"
			]
		}

	],
	displayWork: function displayWork() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var workLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(workEmployer + workTitle + workDates + workLoc + workDescription);
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Maui Smart Grid",
			"dates": "November 2013 - October 2014",
			"description": "The University of Hawaii at Manoa was tasked with maintaining a data science repository for use by analysts of the Maui Smart Grid energy sustainability project through the Hawaii Natural Energy Institute. This software provides the data acquisition, processing and operational resources necessary to accomplish this task.",
			"images": [
				"img/msg1.jpg",
				"img/msg2.jpg"
			]
		},
		{
			"title": "KTUH Mobile App for iOS",
			"dates": "January 2012 - May 2012",
			"description": "The KTUH Mobile App for iOS was a project for the University of Hawaii's student-run radio station, KTUH FM, in collaboration with classmates Marifel Barbasa and Chris Wilson. It affords the user the ability to stream the radio's live feed thru any device running iOS 5. The app gives access to the station's programming in places where the FM signals do not reach.",
			"images": [
				"img/ios1.jpg",
				"img/ios2.jpg",
				"img/ios3.jpg"
			]
		},
		{
			"title": "808 Mixtapes",
			"dates": "June 2012 - Present",
			"description": "808 Mixtapes is a radio show and mixtape series, showcasing local DJs as well as those who visit Hawaii. You can listen to it live every Friday night, from 6-9pm HST on KTUH 90.3FM Honolulu, 91.3FM North Shore, 89.9FM Windward, or on the web at KTUH.org.",
			"images": [
				"img/8081.jpg",
				"img/8082.jpg",
				"img/8083.jpg"
			]
		}		
	],
	displayProjects: function displayProjects() {
		for (project in projects.projects) {
			temp = "";
			$("#projects").append(HTMLprojectStart);
			var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var imageHTML = "";
			for (img in projects.projects[project].images) {
				imageHTML += HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
			}
			projectsHTML = projectTitle + projectDates + projectDescription + imageHTML;
			$(".project-entry:last").append(projectsHTML);
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of Hawaii at Manoa",
			"degree": "Bachelor of Arts",
			"major": "Information and Computer Sciences",
			"dates": "May 2010 - Decenber 2013",
			"location": "Honolulu, Hawaii",
			"url": "http://www.hawaii.edu"
		},
		{
			"name": "University of Hawaii at Manoa",
			"degree": "Bachelor of Arts",
			"major": "Interdisciplinary Studies - Performing Arts",
			"dates": "September 2004 - May 2007",
			"location": "Honolulu, Hawaii",
			"url": "http://www.hawaii.edu"
		},
		{
			"name": "Full Sail University",
			"degree": "Associate of Science, Recording Arts",
			"dates": "January 2003 - December 2003",
			"major": "Recording Arts",
			"location": "Winter Park, Florida",
			"url": "http://www.fullsail.com"
		},
		{
			"name": "Punahou School",
			"degree": "High School Diploma",
			"major": "Liberal Arts",
			"dates": "June 2000",
			"location": "Honolulu, Hawaii",
			"url": "http://www.punahou.edu"
		}
	],
	displayEducation: function displayEducation() {
		$("#education").append(HTMLschoolStart);
		schoolHTML = "";
		for (school in education.schools) {
			var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			schoolHTML += schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajor;
		}
		$(".education-entry:last").append(schoolHTML);
	}
};

var onlineClasses = {
	"courses": [
		{
			"title": "Front-End Development Nanodegree",
			"school": "Udacity",
			"dates": "Current",
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Inferential Statistics",
			"school": "Udacity",
			"dates": "Current",
			"url": "https://www.udacity.com/course/ud827"
		},
		{
			"title": "Descriptive Statistics",
			"school": "Udacity",
			"dates": "October 2014",
			"url": "https://www.udacity.com/course/ud827"
		},
		{
			"title": "Web Application Engineering",
			"school": "Udacity",
			"dates": "January 2013",
			"url": "https://www.udacity.com/course/cs253"			
		}
	], 
	displayCourseware: function displayCourseware() {
		$("#education").append(HTMLonlineClasses);
		for (course in onlineClasses.courses) {
			var title = HTMLonlineTitle.replace("%data%", onlineClasses.courses[course].title);
			var school = HTMLonlineSchool.replace("%data%", onlineClasses.courses[course].school);	
			var dates = HTMLonlineDates.replace("%data%", onlineClasses.courses[course].dates);
			$(".courseware-entry:last").append(title + school + dates);
		}
	} 
}

bio.displayBio();
work.displayWork();
projects.displayProjects();
education.displayEducation();
onlineClasses.displayCourseware();

$("#mapDiv").append(googleMap);
$("#map").append(map);


/* I Decided not to user this section. */
/*if (bio.skills.length > 0) {
	$("#skillsChart").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
};*/
