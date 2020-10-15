$(document).ready(function () {
    
    var language = sessionStorage.getItem('language');

    $('#english').on('click', function () {
        sessionStorage.setItem('language', 'enUS');
        window.location.reload();
    });

    $('#spanish').on('click', function () {
        sessionStorage.setItem('language', 'esES');
        window.location.reload();
    });

    if(language != undefined)
    {
        setLanguageByLang(language)
    }


});

function setLanguageByLang(lang) {

    var dictionary = {
        "translations":[
            {
                "class": "trl-web-title",
                "enUS": "My portfolio - Adri\u00E1n Quir\u00F3s Pascual",
                "esES": "Mi portafolio - Adri\u00E1n Quir\u00F3s Pascual"
            },
            {
                "class": "trl-home",
                "enUS": "Home",
                "esES": "Inicio"
            },
            {
                "class": "trl-who",
                "enUS": "Who I am?",
                "esES": "\u00bfQui\u00e9n soy?"
            },
            {
                "class": "trl-projects",
                "enUS": "Projects",
                "esES": "Proyectos"
            },
            {
                "class": "trl-contact",
                "enUS": "Contact",
                "esES": "Contacto"
            },
            {
                "class": "tr-english",
                "enUS": "Enlgish",
                "esES": "ingl"
            }
        ]   
    };

    for(var i in dictionary.translations)
    {
        if (lang === "enUS")
        {
            $('.' + dictionary.translations[i].class).text(dictionary.translations[i].enUS);
        } 
        else
        {
            $('.' + dictionary.translations[i].class).text(dictionary.translations[i].esES);
        }
    }
}
