var bio = {
	"name": "David Wilkie",
	"role": "Software &amp; Web Engineer",
	"contacts": { "email": "davey@ktuh.org",
				  "github": "@daveyshindig",
				  "twitter": "@ktuh",
				  "mobile": "808.391.8983"
	},
	"photo_url": "img/davey.jpg",
	"welcomeMessage": "Aloha, my name is David Wilkie. Friends call me Davey, or Dave. I am pursuing an undergraduate degree in the Information & Computer Science program at the University of Hawaii at Manoa. This semester, I am studying serious game design and data networks. With my free time, I volunteer as webmaster and DJ at KTUH FM, and make music with my friends. I will take a BA degree at the end of 2013 and am on the job hunt. The goal is to find gainful employment as a software or web developer, while continuing to study math and computer science as a graduate student. You can learn more about me through my portfolio.",
	"skills": [
		"yoga",
		"Japanese",
		"French",
		"computer science",
		"cooking"
	]
};

var work = {
	"jobs": [
		{
			"employer": "Hawaii Natural Energy Institute",
			"title": "Project IT Assistant",
			"workLocation": "Honolulu, Hawai`i",
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
			"workLocation": "Honolulu, Hawai`i",
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
			"workLocation": "Cambodia",
			"dates": "2008 - 2009",
			"description": [
				"Educated secondary-school students in English, trained local teachers in current pedagogic practices",
				"Designed and managed projects in community and youth development",
				"Promoted world peace and international friendship through the sharing of culture and values"
			]
		}
	]
};


for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var workLoc = HTMLworkLocation.replace("%data%", work.jobs[job].workLocation);
	var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(workEmployer + workTitle + workDates + workLoc + workDescription);
}

var projects = {
	"projects": [
		{
			"title": "Maui Smart Grid",
			"dates": "November 2013 - October 2014",
			"description": "The University of Hawaii at Manoa was tasked with maintaining a data science repository for use by analysts of the Maui Smart Grid energy sustainability project through the Hawaii Natural Energy Institute. This software provides the data acquisition, processing and operational resources necessary to accomplish this task.",
			"images": [
				"img/msg1.jpg",
				"img/msg2.jpg",
				"img/msg3.jpg"
			]
		},
		{
			"title": "KTUH Mobile App for iOS",
			"dates": "January 2012 - May 2014",
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
	]
};

var education = {
	"schools": [
		{
			"name": "University of Hawaii at Mānoa",
			"degree": "Bachelor of Arts",
			"major": "Information and Computer Sciences",
			"dates": "May 2010 - May 2014",
			"location": "Honolulu, Hawai`i",
			"url": "http://www.hawaii.edu"
		},
		{
			"name": "University of Hawaii at Mānoa",
			"degree": "Bachelor of Arts",
			"major": "Interdisciplinary Studies – Performing Arts",
			"dates": "September 2004 - May 2007",
			"location": "Honolulu, Hawai`i",
			"url": "http://www.hawaii.edu"
		},
		{
			"name": "Full Sail University",
			"degree": "Associate of Science, Recording Arts",
			"dates": "September 2004 - May 2007",
			"location": "Winter Park, Florida",
			"url": "http://www.fullsail.com"
		},
		{
			"school": "Punahou School",
			"degree": "High School Diploma",
			"dates": "June 2000",
			"location": "Honolulu, Hawai`i",
			"url": "http://www.punahou.edu"
		}
	]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
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
}

