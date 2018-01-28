function typedBanner(welcomeMessageArray) {
    var typed = new Typed("#welcome-message", {
        strings: welcomeMessageArray,
        typeSpeed: 50,
        startDelay: 200,
        backSpeed: 30,
        loop: true,
        backDelay: 700,
    });
}

var bio = {
    name: 'Joelton Matos',
    role: 'Web Developer',
    contacts: {
        facebook: 'https://www.facebook.com/joelton.matos',
        twitter: 'https://twitter.com/joeltonmatos',
        google: 'https://plus.google.com/+joeltonmatos',
        linkedin: 'https://www.linkedin.com/in/joelton-matos-0b56884b/',
        instagram: 'https://www.instagram.com/joeltonmatos',
        skype: 'joeltonmatos',
        mobile: '+55 92 91358952',
        email: 'joeltonmatos@gmail.com',
        github: 'https://github.com/joeltonmats',
        location: 'Campinas-SP'
    },
    welcomeMessage: 'and I love to build web applications., and I love to build landing pages., and I love Web development., and I love coding., and I love team work.,',
    skillsIntroduction: 'I like to work as front-end developer using html5, css3, javascrpt and some its frameworks. In the back-end using java and nodejs.',
    skills: ["HTML5", "CSS", "Javascript", "jQuery", "Bootstrap", "Java"],
    biopic: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/1fc/211/06189d5.jpg',
    aboutMe: 'At first, I am just a boy that like the life. In my free time I apreciate read books, play games , listening a awesome music, did you say "Welcome to the jungle" ? and of course coding so much as can. In second place, I have to tell you about the place where I was born and I love so much:  Parintins-Am. If you would like to hear about the Amazonas, maybe I can help you. And finaly, I am a web developer who has four years experience. Yes, it is a litlle yet, but you will probably like my work.  I am in love with web development.',
    address: {
        city: 'Campinas',
        state: 'SP',
        district: 'Barão Geraldo',
        country: 'Brazil'
    },
    display: function () {

        // Banner

        var welcomeMessages = bio.welcomeMessage.split(',');

        $('.banner-text').prepend(
            HTMLheaderName.replace('%data%', bio.name),
            HTMLheaderRole.replace('%dataRole%', bio.role).replace('%dataWelcome%', welcomeMessages[0]));

        typedBanner(welcomeMessages);

        //Banner Social
        $('.banner-text .social').append(
            HTMLFacebook.replace('%urlValue%', bio.contacts.facebook),
            HTMLTwitter.replace('%urlValue%', bio.contacts.twitter),
            HTMLGooglePlus.replace('%urlValue%', bio.contacts.google),
            HTMLLinkedin.replace('%urlValue%', bio.contacts.linkedin),
            HTMLInstagram.replace('%urlValue%', bio.contacts.instagram),
            HTMLSkype.replace('%urlValue%', bio.contacts.skype),
            HTMLgithub.replace('%urlValue%', bio.contacts.github)
        );

        //About
        $('#profile-pic').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#simple-resume > h2').after(HTMLaboutMsg.replace('%data%', bio.aboutMe));
        $('.contact-details > h2').after(
            HTMLAddress
                .replace('%dataName%', bio.name)
                .replace('%dataDistrict%', bio.address.district)
                .replace('%dataCity%', bio.address.city + ', ' + bio.address.state + ' - ' + bio.address.country)
                .replace('%dataPhoneNumber%', bio.contacts.mobile)
                .replace('%dataEmail%', bio.contacts.email)

        );

        //skills
        if (bio.skills.length > 0) {
            $('#skill-content').prepend(HTMLskillsStart.replace('%data%', bio.skillsIntroduction));
            bio.skills.forEach(function (skill) {
                $('.skills').append(HTMLskills.replace('%dataSkillClass%', skill.toLowerCase()).replace('%dataSkill%', skill.toUpperCase()));
            });
        }

        // social footer
        $('.social-links').append(
            HTMLFacebook.replace('%urlValue%', bio.contacts.facebook),
            HTMLTwitter.replace('%urlValue%', bio.contacts.twitter),
            HTMLGooglePlus.replace('%urlValue%', bio.contacts.google),
            HTMLLinkedin.replace('%urlValue%', bio.contacts.linkedin),
            HTMLInstagram.replace('%urlValue%', bio.contacts.instagram),
            HTMLSkype.replace('%urlValue%', bio.contacts.skype),
            HTMLgithub.replace('%urlValue%', bio.contacts.github)
        );

        // google maps
        $('#mapDiv').append(googleMap);
    }
};

var education = {
    'schools': [
        {
            'name': 'Maurício de Nassau College',
            'location': 'Manaus-AM',
            'degree': 'Project Management',
            'majors': ['Graduated Degree'],
            'dates': "February 2016",
            'url': 'https://www.posgrado.net.br/',
            'details': 'A Graduated Degree in Manaus-AM. Occurred for 18 months.'
        },
        {
            'name': 'University of the State of Amazonas',
            'location': 'Manaus-AM',
            'degree': 'Computer Engineering',
            'majors': ['Bachelor\'s degree'],
            'dates': "August 2014",
            'url': 'http://www3.uea.edu.br/',
            'details': 'A Bachelor Degree in Manaus-AM. Occurred for 5 years.'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Javascript Fundamental',
            'school': 'Udacity',
            'dates': "Oct 2016" + "-" + "Jan 2017",
            'url': '',
        }
    ],
    display: function () {

        var educationSchools = education.schools;
        var educationOnCourses = education.onlineCourses;

        $('#education-entries').append(HTMLschoolStart);

        // school
        educationSchools.forEach(function (school) {
            $('.education-entry .twelve:last').append(
                HTMLschoolName.replace('%data%', school.name).replace('%dataUrl%', school.url),
                HTMLschoolDegree.replace('%data%', school.degree).replace('%dataDate%', school.dates),
                HTMLschoolDetails.replace('%data%', school.details)
            );
        });
    }
};

var work = {
    'jobs': [
        {
            'employer': 'Venturus',
            'title': 'Junior Analyst Developer',
            'location': 'Campinas-SP',
            'dates': "Currently",
            'description': 'Web development using Java, HTML5, CSS3 and Javascript. Also, simple features using typescript, angualar4 and project inovation set up with Apache Cassandra, Spark Streaming and Java 8.'
        },
        {
            'employer': 'Medic Lab - Medic Center',
            'title': 'Web Developer',
            'location': 'Manaus-AM',
            'dates': "Jan 2014" + " - " + "Jan 2017",
            'description': 'Front-end Development using html5, css3, javacript and frameworks like bootstrap and angularJs. Also, development and maintenance systems using Java Server Faces and hibernate. Creating queries, functions and views in SGBD. Analysis and requirements surveys for new business rules.'
        },
        {
            'employer': 'Court of Accounts of the State of the Amazonas',
            'title': 'Intern',
            'location': 'Manaus-AM',
            'dates': "Mar 2013" + " - " + "Jan 2014",
            'description': 'Software Development with Frameworks Java Server Faces 2, Struts 2 and queries with SGBD PostegreSql.'
        },
    ],
    display: function () {
        work.jobs.forEach(function (job) {
            $('#work-entries').append(HTMLworkStart);
            $('.work-entry .twelve:last').append(
                HTMLworkEmployer.replace('%data%', job.employer),
                HTMLworkTitle.replace('%data%', job.title).replace('%dataDate%', job.dates),
                HTMLworkDescription.replace('%data%', job.description)
            );
        });
    }
};

var projects = {
    'projects': [
        {
            'id': 1,
            'title': 'Best Bite',
            'dates': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/bestbite-min.jpg', 'images/portfolio/modals/bestbite.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331395/'
        },
        {
            'id': 2,
            'title': 'Evo System',
            'dates': "Oct 2016" + "-" + "Jan 2017",
            'description': 'Web system to customers payments management . I was part of the team as Fullstack developer',
            'images': ['images/portfolio/evo-min.jpg', 'images/portfolio/modals/evo.jpg'],
            'link': 'http://45.79.194.183/SaudeDescontoSystem/comuns/paginaPrincipal.jsf'
        },
        {
            'id': 3,
            'title': 'Bass',
            'dates': "Jan 2017",
            'description': 'Overview Bass',
            'images': ['images/portfolio/bass-min.jpg', 'images/portfolio/modals/bass.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331387/'
        },
        {
            'id': 4,
            'title': 'New Saude System',
            'dates': "Dez 2015" + "-" + "Jan 2017",
            'description': 'Migration from old sytem to current technologies. I was part of the team as Fullstack developer',
            'images': ['images/portfolio/newsaude-min.jpg', 'images/portfolio/modals/newsaude.jpg'],
            'link': 'https://goo.gl/cHJEz6'
        },
        {
            'id': 5,
            'title': 'Schedule',
            'dates': "Jan 2017",
            'description': 'Overview Schedule',
            'images': ['images/portfolio/schedule-min.jpg', 'images/portfolio/modals/schedule.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331383/'
        },
        {
            'id': 6,
            'title': 'Samel Scheduling Module',
            'dates': "Fev 2017" + "-" + "Jun 2017",
            'description': 'Module Development to support schedules. I was part of the team as Front-end developer',
            'images': ['images/portfolio/samel-min.jpg', 'images/portfolio/modals/samel.jpg'],
            'link': 'http://agendamento.samel.com.br/STANDARD/#/login/signin'
        },
        {
            'id': 7,
            'title': 'Adoptly',
            'dates': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/adoptly-min.jpg', 'images/portfolio/modals/adoptly.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331330/'
        },
        {
            'id': 8,
            'title': 'Headlines',
            'dates': "Jun 2017",
            'description': 'Overview Headlines',
            'images': ['images/portfolio/headlines-min.jpg', 'images/portfolio/modals/headlines.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/344060/'
        },


    ],
    display: function () {

        projects.projects.forEach(function (project) {
            var callModalId = 'call-' + project.id + 8;
            var modalId = 'modal-' + (project.id + 8);

            // build overview projects
            $('#portfolio-wrapper').append(
                HTMLprojectStart
                    .replace('%dataModalId%', modalId)
                    .replace('%dataLinkDescription%', project.description)
                    .replace('%dataLinkId%', callModalId)
                    .replace('%dataImageDescription%', project.description)
                    .replace('%dataImage%', project.images[0])
            );

            $('#' + callModalId).append(
                HTMLprojectContent
                    .replace('%dataTitle%', project.title)
                    .replace('%dataDescription%', project.description)
            );


            // build modals in background
            $('#portfolio > .row').append(
                HTMLprojectModalStart
                    .replace('%dataId%', modalId)
                    .replace('%dataImage%', project.images[1])
            );

            $('#' + modalId).append(
                HTMLprojectModalDescriptionBox.replace('%dataTitle%', project.title).replace('%dataDescription%', project.description),
                HTMLprojectModalLinkBox.replace('%dataUrl%', project.link)
            );
        });
    }
};

var myTestimonials = {
    testimonials: [
        { quote: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein' },
        { quote: 'We become what we think about.', author: 'Earl Nightingale' },
        { quote: 'The two most important days in your life are the day you are born and the day you find out why.', author: 'Mark Twain' },
    ],
    display: function () {
        myTestimonials.testimonials.forEach(function (testimonial) {
            $('.slides').append(
                HTMLtestimonials
                    .replace('%dataQuote%', testimonial.quote)
                    .replace('%dataAuthor%', testimonial.author)
            );
        });
    }
};

function begin() {
    bio.display();
    education.display();
    work.display();
    projects.display();
    myTestimonials.display();
}


begin();