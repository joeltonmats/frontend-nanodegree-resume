<<<<<<< HEAD
function loadSkillGraph() {

    $('#skills-graph').append(HTMLGraphSkills, HTMLButtonOthersSkills);

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["HTML5", "CSS3", "Javascript", "Bootstrap", "Java Web"],
            datasets: [{
                label: 'Nível de Habilidade',
                data: [9, 9, 9, 8, 8, 0, 10],
                backgroundColor: [
                    '#FF6500',
                    '#3F88C5',
                    '#003F91',
                    '#772D8B',
                    "#4357AD",
                    '#FF82A9',
                    '#ED254E',
                ],
            }]
        },
        options: {
            barPercentage: 0.1,
        }
    });
};

||||||| parent of adb945d... implemented version 1.0 resume
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

=======
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

>>>>>>> adb945d... implemented version 1.0 resume
var bio = {
    name: 'Joelton dos Santos Matos',
    role: 'Web Developer',
    contacts: {
        mobile: '+55 92 91358952',
        email: 'joeltonmatos@gmail.com',
        github: 'https://github.com/joeltonmats',
        twitter: 'https://twitter.com/joeltonmatos',
        location: 'https://goo.gl/5fKeiM'
    },
    welcomeMessage: 'Se a oportunidade não tocar, construa uma porta - Milton Berle',
    skills: ["HTML5", "CSS3", "Javascript", "Java"],
    biopic: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/6/000/1fc/211/06189d5.jpg',
    display: function () {

        $('#header').prepend(
            HTMLheaderName.replace('%data%', bio.name),
            HTMLheaderRole.replace('%data%', bio.role),
        );

        //contacts
        $('#topContacts').append(
            HTMLmobile.replace('%urlValue%', '#').replace('%data%', bio.contacts.mobile),
            HTMLemail.replace('%urlValue%', '#').replace('%data%', bio.contacts.email),
            HTMLgithub.replace('%urlValue%', bio.contacts.github).replace('%data%', '/joeltonmats'),
            HTMLtwitter.replace('%urlValue%', bio.contacts.twitter).replace('%data%', '@joeltonmatos'),
            HTMLlocation.replace('%urlValue%', bio.contacts.location).replace('%data%', 'Campinas-SP')
        );

        $('#footerContacts').append(
            HTMLmobile.replace('%urlValue%', '#').replace('%data%', bio.contacts.mobile),
            HTMLemail.replace('%urlValue%', '#').replace('%data%', bio.contacts.email),
            HTMLgithub.replace('%urlValue%', bio.contacts.github).replace('%data%', '/joeltonmats'),
            HTMLtwitter.replace('%urlValue%', bio.contacts.twitter).replace('%data%', '@joeltonmatos'),
            HTMLlocation.replace('%urlValue%', bio.contacts.location).replace('%data%', 'Campinas-SP')
        );

        $('#header').append(
            HTMLbioPic.replace('%data%', bio.biopic),
            HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage)
        );

        //skills
        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            for (var index = 0; index < bio.skills.length; index++) {
                var skill = bio.skills[index];
                $('#skills').append(HTMLskills.replace('%data%', skill));
            }
        }

    }
};

var education = {
    'schools': [
        {
            'name': 'Universidade do Estado do Amazonas',
            'location': 'Manaus-AM',
            'degree': 'Engenharia da Computação',
            'majors': ['Graduação'],
            'dates': "Fev 2009" + "-" + "October 2014",
            'url': '',
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

<<<<<<< HEAD
<<<<<<< HEAD
        $('#education').append(HTMLschoolStart, HTMLonlineClasses, HTMLonlineClassesStart);
||||||| parent of adb945d... implemented version 1.0 resume
        $('#education-entries').append(HTMLschoolStart/* , HTMLonlineClasses, HTMLonlineClassesStart */);
=======
        $('#education-entries').append(HTMLschoolStart);
>>>>>>> adb945d... implemented version 1.0 resume
||||||| parent of adb945d... implemented version 1.0 resume
        $('#education-entries').append(HTMLschoolStart/* , HTMLonlineClasses, HTMLonlineClassesStart */);
=======
        $('#education-entries').append(HTMLschoolStart);
>>>>>>> adb945d... implemented version 1.0 resume

        // school
        educationSchools.forEach(function (school) {
            $('.education-entry:last').append(
                HTMLschoolName.replace('%data%', school.name),
                HTMLschoolDegree.replace('%data%', school.degree),
                HTMLschoolDates.replace('%data%', school.dates),
                HTMLschoolLocation.replace('%data%', school.location),
                HTMLschoolMajor.replace('%data%', school.majors),
            );
        });
<<<<<<< HEAD
<<<<<<< HEAD

        // online class
        educationOnCourses.forEach(function (onCourse) {
            $('.online-education-entry:last').append(
                HTMLonlineTitle.replace('%data%', onCourse.title),
                HTMLschoolDegree.replace('%data%', onCourse.school),
                HTMLonlineDates.replace('%data%', onCourse.dates),
                HTMLonlineURL.replace('%data%', onCourse.url),
            );
        })
||||||| parent of adb945d... implemented version 1.0 resume

        /*   // online class
          educationOnCourses.forEach(function (onCourse) {
              $('.online-education-entry:last').append(
                  HTMLonlineTitle.replace('%data%', onCourse.title),
                  HTMLschoolDegree.replace('%data%', onCourse.school),
                  HTMLonlineDates.replace('%data%', onCourse.dates),
                  HTMLonlineURL.replace('%data%', onCourse.url),
              );
          }) */
=======
>>>>>>> adb945d... implemented version 1.0 resume
||||||| parent of adb945d... implemented version 1.0 resume

        /*   // online class
          educationOnCourses.forEach(function (onCourse) {
              $('.online-education-entry:last').append(
                  HTMLonlineTitle.replace('%data%', onCourse.title),
                  HTMLschoolDegree.replace('%data%', onCourse.school),
                  HTMLonlineDates.replace('%data%', onCourse.dates),
                  HTMLonlineURL.replace('%data%', onCourse.url),
              );
          }) */
=======
>>>>>>> adb945d... implemented version 1.0 resume
    }
}

var work = {
    'jobs': [
        {
            'employer': 'Tribunal de Contas do Estado do Amazonas',
            'title': 'Estagiario Desenvolvimento Web',
            'location': 'Manaus-AM',
            'date': "Mar 2013" + "-" + "Jan 2014",
            'description': 'Desenvolvimento e manutenção de sistemas web. Utilizava-se linguagem java, bibliotecas jquery, primefaces. Relatórios através de consulta a base de dados por meio de consultas sql.'
        },
        {
            'employer': 'MedicLab - Centro Medico',
            'title': 'Desenvolvedor Web',
            'location': 'Manaus-AM',
            'date': "Jan 2014" + "-" + "Jan 2017",
            'description': 'Desenvolvimento e manutenção de softwares utilizando principalmente linguagem java. Front-end através de frameworks como angularJs e bootstrap.'
        },
        {
            'employer': 'Venturus',
            'title': 'Analista Desenvolvedor JR',
            'location': 'Campinas-SP',
            'date': "Atualmente",
            'description': 'Desenvolvimento e manutencao de softwares utilizando Java'
        }
    ],
    display: function () {

        //jobs
        if (work.jobs.length > 0) {
            for (var key in work.jobs) {
                if (work.jobs.hasOwnProperty(key)) {
                    var job = work.jobs[key];
                    $('#workExperience').append(HTMLworkStart);
                    $('.work-entry:last').append(
                        HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title),
                        HTMLworkDates.replace('%data%', job.date),
                        HTMLworkLocation.replace('%data%', job.location),
                        HTMLworkDescription.replace('%data%', job.description)
                    );
                }
            }
        }

    }

};

var projects = {
    'projects': [
        {
<<<<<<< HEAD
            'title': 'New Saude System',
            'date': "Jan 2016" + "-" + "Jun 2016",
            'description': 'New Version of Saude System Web',
            'images': ['https://www.advsol.com/ASI/images/NewSite/Devices/three_device_image.png',
                'https://thenextweb.com/wp-content/blogs.dir/1/files/2013/09/customers.png'
            ],
        },
        {
            'title': 'New Odonto System',
            'date': "Oct 2016" + "-" + "Jan 2017",
            'description': 'New Version of Odonto System Web',
            'images': ['https://www.webtrade.ie/_fileupload/Image/1_cms-image.png', 'http://s2.dmcdn.net/GIyzb/1280x720-S0R.jpg'],
||||||| parent of adb945d... implemented version 1.0 resume
            'id': 1,
            'title': 'Best Bite',
            'date': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/bestbite.jpg', 'images/portfolio/modals/bestbite.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331395/'
        },
        {
            'id': 2,
            'title': 'Evo System',
            'date': "Oct 2016" + "-" + "Jan 2017",
            'description': 'Web system to customers payments management . I was part of the team as Fullstack developer',
            'images': ['images/portfolio/evo.jpg', 'images/portfolio/modals/evo.jpg'],
            'link': 'http://45.79.194.183/SaudeDescontoSystem/comuns/paginaPrincipal.jsf'
        },
        {
            'id': 3,
            'title': 'Bass',
            'date': "Jan 2017",
            'description': 'Overview Bass',
            'images': ['images/portfolio/bass.jpg', 'images/portfolio/modals/bass.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331387/'
        },
        {
            'id': 4,
            'title': 'New Saude System',
            'date': "Dez 2015" + "-" + "Jan 2017",
            'description': 'Migration from old sytem to current technologies. I was part of the team as Fullstack developer',
            'images': ['images/portfolio/newsaude.jpg', 'images/portfolio/modals/newsaude.jpg'],
            'link': 'https://goo.gl/cHJEz6'
        },
        {
            'id': 5,
            'title': 'Schedule',
            'date': "Jan 2017",
            'description': 'Overview Schedule',
            'images': ['images/portfolio/schedule.jpg', 'images/portfolio/modals/schedule.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331383/'
        },
        {
            'id': 6,
            'title': 'Samel Scheduling Module',
            'date': "Fev 2017" + "-" + "Jun 2017",
            'description': 'Module Development to support schedules. I was part of the team as Front-end developer',
            'images': ['images/portfolio/samel.jpg', 'images/portfolio/modals/samel.jpg'],
            'link': 'http://agendamento.samel.com.br/STANDARD/#/login/signin'
        },
        {
            'id': 7,
            'title': 'Adoptly',
            'date': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/adoptly.jpg', 'images/portfolio/modals/adoptly.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331330/'
        },
        {
<<<<<<< HEAD
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
=======
            'id': 1,
            'title': 'Best Bite',
            'date': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/bestbite.jpg', 'images/portfolio/modals/bestbite.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331395/'
        },
        {
            'id': 2,
            'title': 'Evo System',
            'date': "Oct 2016" + "-" + "Jan 2017",
            'description': 'Web system to customers payments management . I was part of the team as Fullstack developer',
            'images': ['images/portfolio/evo.jpg', 'images/portfolio/modals/evo.jpg'],
            'link': 'http://45.79.194.183/SaudeDescontoSystem/comuns/paginaPrincipal.jsf'
        },
        {
            'id': 3,
            'title': 'Bass',
            'date': "Jan 2017",
            'description': 'Overview Bass',
            'images': ['images/portfolio/bass.jpg', 'images/portfolio/modals/bass.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331387/'
        },
        {
            'id': 4,
            'title': 'New Saude System',
            'date': "Dez 2015" + "-" + "Jan 2017",
            'description': 'Migration from old sytem to current technologies. I was part of the team as Fullstack developer',
            'images': ['images/portfolio/newsaude.jpg', 'images/portfolio/modals/newsaude.jpg'],
            'link': 'https://goo.gl/cHJEz6'
        },
        {
            'id': 5,
            'title': 'Schedule',
            'date': "Jan 2017",
            'description': 'Overview Schedule',
            'images': ['images/portfolio/schedule.jpg', 'images/portfolio/modals/schedule.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331383/'
        },
        {
            'id': 6,
            'title': 'Samel Scheduling Module',
            'date': "Fev 2017" + "-" + "Jun 2017",
            'description': 'Module Development to support schedules. I was part of the team as Front-end developer',
            'images': ['images/portfolio/samel.jpg', 'images/portfolio/modals/samel.jpg'],
            'link': 'http://agendamento.samel.com.br/STANDARD/#/login/signin'
||||||| parent of adb945d... implemented version 1.0 resume
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
=======
            'id': 8,
            'title': 'Headlines',
            'date': "Jun 2017",
            'description': 'Overview Headlines',
            'images': ['images/portfolio/headlines.jpg', 'images/portfolio/modals/headlines.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/344060/'
>>>>>>> adb945d... implemented version 1.0 resume
        },
        {
            'id': 7,
            'title': 'Adoptly',
            'date': "Jan 2017",
            'description': 'Overview Best Bite',
            'images': ['images/portfolio/adoptly.jpg', 'images/portfolio/modals/adoptly.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/331330/'
        },
        {
            'id': 8,
            'title': 'Headlines',
            'date': "Jun 2017",
            'description': 'Overview Headlines',
            'images': ['images/portfolio/headlines.jpg', 'images/portfolio/modals/headlines.jpg'],
            'link': 'https://thimbleprojects.org/joeltonmatos/344060/'
>>>>>>> adb945d... implemented version 1.0 resume
        },



    ],
    display: function () {

        // projetcs
        if (projects.projects.length > 0) {
            for (var key in projects.projects) {
                if (projects.projects.hasOwnProperty(key)) {
                    var project = projects.projects[key];
                    var HTMLprojectImageArray = [];

                    $('#projects').append(HTMLprojectStart);

                    project.images.forEach(function (img) {
                        HTMLprojectImageArray.push(HTMLprojectImage.replace('%data%', img));
                    })


                    $('.project-entry:last').append(
                        HTMLworkTitle.replace('%data%', project.title),
                        HTMLprojectDates.replace('%data%', project.date),
                        HTMLprojectDescription.replace('%data%', project.description),
                        HTMLprojectImageArray
                    );
                }
            }
        }


<<<<<<< HEAD

<<<<<<< HEAD
||||||| parent of adb945d... implemented version 1.0 resume

||||||| parent of adb945d... implemented version 1.0 resume

=======
>>>>>>> adb945d... implemented version 1.0 resume
            // build modals in background
            $('#portfolio > .row').append(
                HTMLprojectModalStart
                    .replace('%dataId%', modalId)
                    .replace('%dataImage%', project.images[1])
            );
=======
            // build modals in background
            $('#portfolio > .row').append(
                HTMLprojectModalStart
                    .replace('%dataId%', modalId)
                    .replace('%dataImage%', project.images[1])
            );
>>>>>>> adb945d... implemented version 1.0 resume


    }

<<<<<<< HEAD
};

function inName(name) {
    var newName;
    var nameArray = name.split(" ");
    nameArray

    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    newName = nameArray.join(" ");

    return newName;

}

<<<<<<< HEAD
||||||| parent of adb945d... implemented version 1.0 resume

function inName(name) {
    var newName;
    var nameArray = name.split(" ");
    nameArray

    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    newName = nameArray.join(" ");

    return newName;

}

=======
>>>>>>> adb945d... implemented version 1.0 resume
||||||| parent of adb945d... implemented version 1.0 resume

function inName(name) {
    var newName;
    var nameArray = name.split(" ");
    nameArray

    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    newName = nameArray.join(" ");

    return newName;

}

=======
>>>>>>> adb945d... implemented version 1.0 resume
function begin() {
    //to-do: remove line below
    $("#main").append(bio.name, internationalizeButton);

    bio.display();
    work.display();
    projects.display();
<<<<<<< HEAD
    education.display();
    loadSkillGraph();
    getModalOthersSkills();
||||||| parent of adb945d... implemented version 1.0 resume
    myTestimonials.display();
<<<<<<< HEAD
    /*
    getModalOthersSkills(); */
=======
    myTestimonials.display();
>>>>>>> adb945d... implemented version 1.0 resume
||||||| parent of adb945d... implemented version 1.0 resume
    /*
    getModalOthersSkills(); */
=======
>>>>>>> adb945d... implemented version 1.0 resume
}


begin();