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
    name: 'Teste',
    role: 'Web Developer',
    contacts: {
        facebook: 'https://github.com/joeltonmats',
        twitter: 'https://twitter.com/joeltonmatos',
        google: 'https://twitter.com/joeltonmatos',
        linkedin: 'https://twitter.com/joeltonmatos',
        instagram: 'https://twitter.com/joeltonmatos',
        skype: 'https://twitter.com/joeltonmatos',
        mobile: '+55 92 91358952',
        email: 'joeltonmatos@gmail.com',
        github: 'https://github.com/joeltonmats',
        location: 'https://goo.gl/5fKeiM'
    },
    welcomeMessage: 'creating awesome and effective visual identities for companies of all sizes around the globe.',
    skills: ["HTML5", "CSS3", "Javascript", "Java"],
    biopic: 'images/profilepic.jpg',
    aboutMe: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
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
            HTMLheaderRole.replace('%dataRole%', bio.role).replace('%dataWelcome%', bio.welcomeMessage));

        var HTMLFacebook = '<li><a href="%urlValue%"><i class="fa fa-facebook"></i></a></li>';
        var HTMLTwitter = '<li><a href="%urlValue%"><i class="fa fa-twitter"></i></a></li>';
        var HTMLGooglePlus = '<li><a href="%urlValue%"><i class="fa fa-google-plus"></i></a></li>';
        var HTMLLinkedin = '<li><a href="%urlValue%"><i class="fa fa-linkedin"></i></a></li>';
        var HTMLInstagram = '<li><a href="%urlValue%"><i class="fa fa-instagram"></i></a></li>';
        var HTMLSkype = '<li><a href="%urlValue%"><i class="fa fa-skype"></i></a></li>';
        var HTMLgithub = '<li><a href="%urlValue%"><i class="fa fa-github"></i></a></li>';

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
        $('#profile-pic').append(
            HTMLbioPic.replace('%data%', bio.biopic)
        );

        $('#simple-resume > h2').after(
            HTMLaboutMsg.replace('%data%', bio.aboutMe)
        );

        $('.contact-details > h2').after(
            HTMLAddress
                .replace('%dataName%', bio.name)
                .replace('%dataDistrict%', bio.address.district)
                .replace('%dataCity%', bio.address.city + ',' + bio.address.state + '-' + bio.address.country)
                .replace('%dataPhoneNumber%', bio.contacts.mobile)
                .replace('%dataEmail%', bio.contacts.email)

        );

        /*
               $('#footerContacts').append(
                   HTMLmobile.replace('%urlValue%', '#').replace('%data%', bio.contacts.mobile),
                   HTMLemail.replace('%urlValue%', '#').replace('%data%', bio.contacts.email),
                   HTMLgithub.replace('%urlValue%', bio.contacts.github).replace('%data%', '/joeltonmats'),
                   HTMLtwitter.replace('%urlValue%', bio.contacts.twitter).replace('%data%', '@joeltonmatos'),
                   HTMLlocation.replace('%urlValue%', bio.contacts.location).replace('%data%', 'Campinas-SP')
               );
       
              
       
               //skills
               if (bio.skills.length > 0) {
                   $('#header').append(HTMLskillsStart);
                   for (var index = 0; index < bio.skills.length; index++) {
                       var skill = bio.skills[index];
                       $('#skills').append(HTMLskills.replace('%data%', skill));
                   }
               } */

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
            'details': 'This is a detail brow'
        },
        {
            'name': 'Universidade do Estado do Amazonas',
            'location': 'Manaus-AM',
            'degree': 'Engenharia da Computação',
            'majors': ['Graduação'],
            'dates': "Fev 2009" + "-" + "October 2014",
            'url': '',
            'details': 'This is a detail brow'
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
                HTMLschoolName.replace('%data%', school.name),
                HTMLschoolDegree.replace('%data%', school.degree).replace('%dataDate%', school.dates),
                /* HTMLschoolDates.replace('%data%', school.dates),
                HTMLschoolLocation.replace('%data%', school.location),
                HTMLschoolMajor.replace('%data%', school.majors), */
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
            'employer': 'Tribunal de Contas do Estado do Amazonas',
            'title': 'Estagiario Desenvolvimento Web',
            'location': 'Manaus-AM',
            'date': "Mar 2013" + " - " + "Jan 2014",
            'description': 'Desenvolvimento e manutenção de sistemas web. Utilizava-se linguagem java, bibliotecas jquery, primefaces. Relatórios através de consulta a base de dados por meio de consultas sql.'
        },
        {
            'employer': 'MedicLab - Centro Medico',
            'title': 'Desenvolvedor Web',
            'location': 'Manaus-AM',
            'date': "Jan 2014" + " - " + "Jan 2017",
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
                    $('#work-entries').append(HTMLworkStart);
                    $('.work-entry .twelve:last').append(
                        HTMLworkEmployer.replace('%data%', job.employer),
                        HTMLworkTitle.replace('%data%', job.title).replace('%dataDate%', job.date),
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
            'id': 1,
            'title': 'New Saude System',
            'date': "Jan 2016" + "-" + "Jun 2016",
            'description': 'New Version of Saude System Web',
            'images': ['https://www.advsol.com/ASI/images/NewSite/Devices/three_device_image.png',
                'https://thenextweb.com/wp-content/blogs.dir/1/files/2013/09/customers.png'
            ],
        },
        {
            'id': 2,
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
                    //var HTMLprojectImageArray = [];

                    $('#portfolio-wrapper').append(HTMLprojectStart.replace('%dataId%', project.id + 8).replace('%dataIdKey%', project.id + 8));
                    var id = '#' + (project.id + 8);
                    $(id).append(HTMLprojectContent.replace('%dataTitle%', project.title).replace('%dataDescription%', project.description));

                    $('#portfolio > .row').append(
                        HTMLprojectModalStart.replace('%dataId%', (project.id + 8))
                    );

                    var modal = '#' + (project.id + 8);
                    $(modal).append(
                        HTMLprojectModalDescriptionBox,
                        HTMLprojectModalLinkBox
                    );


                    /*   project.images.forEach(function (img) {
                          HTMLprojectImageArray.push(HTMLprojectImage.replace('%data%', img));
                      }) */

                    /* 
                                        $('.project-entry:last').append(
                                            HTMLworkTitle.replace('%data%', project.title),
                                            HTMLprojectDates.replace('%data%', project.date),
                                            HTMLprojectDescription.replace('%data%', project.description),
                                           /*  HTMLprojectImageArray */
                    //); */
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
    //$("#main").append(bio.name, internationalizeButton);

    bio.display();
    education.display();
    work.display();
    projects.display();
    /*
    loadSkillGraph();
    getModalOthersSkills(); */
}


begin();