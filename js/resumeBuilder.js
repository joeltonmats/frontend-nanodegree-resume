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

function getModalOthersSkills() {
    $('#btnOtherSkill').click(function (event) {
        $("#modal-otherkill").show();
        $("#modal-otherkill").modal({
            fadeDuration: 300,
            fadeDelay: 1.75
        });

        return false;
    });
};

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
        location: 'https://goo.gl/5fKeiM'
    },
    welcomeMessages: [
        'and I love to build web applications.',
        'and I love to build landing pages.',
        'and I love Web development.',
        'and I love coding.',
        'and I love team work.',
    ],
    skillsIntroduction: 'I like to work as front-end developer using html5, css3, javascrpt and some its frameworks. In the back-end using java and nodejs.',
    skills: ["HTML5", "CSS", "Javascript", "jQuery", "Bootstrap", "Java"],
    biopic: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/1fc/211/06189d5.jpg',
    aboutMe: 'At first, I am just a boy that like the life. In my free time I apreciate read books, play games , listening a awesome music, did you say "Welcome to the jungle" ? and of course coding so much as can. In second place, I have to tell you about the place where I was born and I love so much:  Parintins-Am. If you would like to hear about the Amazonas, maybe I can help you. And finaly, I am a web developer who has four years experience. Yes, it is a litlle yet, but you will probably like my work.  I am in love with web development.',
    address: {
        city: 'Campinas',
        state: 'SP',
        district: 'Barão Geraldo',
        country: 'Brasil'
    },
    display: function () {

        // Banner
        $('.banner-text').prepend(
            HTMLheaderName.replace('%data%', bio.name),
            HTMLheaderRole.replace('%dataRole%', bio.role).replace('%dataWelcome%', bio.welcomeMessages[0]));

        typedBanner(bio.welcomeMessages);

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
            for (var index = 0; index < bio.skills.length; index++) {
                var skill = bio.skills[index];
                $('.skills').append(HTMLskills.replace('%dataSkillClass%', skill.toLowerCase()).replace('%dataSkill%', skill.toUpperCase()));
            }
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

        $('#education-entries').append(HTMLschoolStart/* , HTMLonlineClasses, HTMLonlineClassesStart */);

        // school
        educationSchools.forEach(function (school) {
            $('.education-entry .twelve:last').append(
                HTMLschoolName.replace('%data%', school.name).replace('%dataUrl%', school.url),
                HTMLschoolDegree.replace('%data%', school.degree).replace('%dataDate%', school.dates),
                HTMLschoolDetails.replace('%data%', school.details)
            );
        });

        /*   // online class
          educationOnCourses.forEach(function (onCourse) {
              $('.online-education-entry:last').append(
                  HTMLonlineTitle.replace('%data%', onCourse.title),
                  HTMLschoolDegree.replace('%data%', onCourse.school),
                  HTMLonlineDates.replace('%data%', onCourse.dates),
                  HTMLonlineURL.replace('%data%', onCourse.url),
              );
          }) */
    }
}

var work = {
    'jobs': [
        {
            'employer': 'Venturus',
            'title': 'Junior Analyst Developer',
            'location': 'Campinas-SP',
            'date': "Currently",
            'description': 'Web development using Java, HTML5, CSS3 and Javascript. Also, simple features using typescript, angualar4 and project inovation set up with Apache Cassandra, Spark Streaming and Java 8.'
        },
        {
            'employer': 'Medic Lab - Medic Center',
            'title': 'Web Developer',
            'location': 'Manaus-AM',
            'date': "Jan 2014" + " - " + "Jan 2017",
            'description': 'Front-end Development using html5, css3, javacript and frameworks like bootstrap and angularJs. Also, development and maintenance systems using Java Server Faces and hibernate. Creating queries, functions and views in SGBD. Analysis and requirements surveys for new business rules.'
        },
        {
            'employer': 'Court of Accounts of the State of the Amazonas',
            'title': 'Intern',
            'location': 'Manaus-AM',
            'date': "Mar 2013" + " - " + "Jan 2014",
            'description': 'Software Development with Frameworks Java Server Faces 2, Struts 2 and queries with SGBD PostegreSql.'
        },
    ],
    display: function () {
        work.jobs.forEach(function (job) {
            $('#work-entries').append(HTMLworkStart);
            $('.work-entry .twelve:last').append(
                HTMLworkEmployer.replace('%data%', job.employer),
                HTMLworkTitle.replace('%data%', job.title).replace('%dataDate%', job.date),
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
            'date': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/bestbite.jpg', 'images/portfolio/modals/bestbite.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331395/'
        },
        {
            'id': 2,
            'title': 'Bass',
            'date': "Jan 2017",
            'description': 'Overview Bass',
            'images': ['images/portfolio/bass.jpg', 'images/portfolio/modals/bass.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331387/'
        },
        {
            'id': 3,
            'title': 'Schedule',
            'date': "Jan 2017",
            'description': 'Overview Schedule',
            'images': ['images/portfolio/schedule.jpg', 'images/portfolio/modals/schedule.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331383/'
        },
        {
            'id': 4,
            'title': 'Adoptly',
            'date': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/adoptly.jpg', 'images/portfolio/modals/adoptly.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331330/'
        },
        {
            'id': 5,
            'title': 'New Saude System',
            'date': "Jan 2016" + "-" + "Jun 2016",
            'description': 'New Version of Saude System Web',
            'images': ['https://www.advsol.com/ASI/images/NewSite/Devices/three_device_image.png',
                'https://thenextweb.com/wp-content/blogs.dir/1/files/2013/09/customers.png'
            ],
            'link': 'https://thimbleprojects.org/joeltonmatos/331395/'
        },
        {
            'id': 6,
            'title': 'New Odonto System',
            'date': "Oct 2016" + "-" + "Jan 2017",
            'description': 'New Version of Odonto System Web',
            'images': ['https://www.webtrade.ie/_fileupload/Image/1_cms-image.png', 'http://s2.dmcdn.net/GIyzb/1280x720-S0R.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331395/'
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
}


function inName(name) {
    var newName;
    var nameArray = name.split(" ");
    nameArray

    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    newName = nameArray.join(" ");

    return newName;

}

function begin() {
    bio.display();
    education.display();
    work.display();
    projects.display();
    myTestimonials.display();
    /*
    getModalOthersSkills(); */
}


begin();