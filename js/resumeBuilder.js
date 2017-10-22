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

        $('#education').append(HTMLschoolStart, HTMLonlineClasses, HTMLonlineClassesStart);

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

        // online class
        educationOnCourses.forEach(function (onCourse) {
            $('.online-education-entry:last').append(
                HTMLonlineTitle.replace('%data%', onCourse.title),
                HTMLschoolDegree.replace('%data%', onCourse.school),
                HTMLonlineDates.replace('%data%', onCourse.dates),
                HTMLonlineURL.replace('%data%', onCourse.url),
            );
        })
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





    }

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

function begin() {
    //to-do: remove line below
    $("#main").append(bio.name, internationalizeButton);

    bio.display();
    work.display();
    projects.display();
    education.display();
    loadSkillGraph();
    getModalOthersSkills();
}


begin();