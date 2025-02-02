/*
TR:
* Kod önizleme aşamasındadır ve tamamlanmamıştır yalnızca yeni dil sisteminin kullanıcılar tarafından incelenebilmesi için paylaşılmıştır.

EN:
* The code is in preview and incomplete, and is only shared so that the new language system can be reviewed by users.


date: 2/2/2025 11:45 PM
*/

window.onload = function() {
    var lang = navigator.language || navigator.userLanguage;
    var About = document.getElementById("About");
    var Updates = document.getElementById("Updates");
    var Contracts = document.getElementById("Contracts");
    var Philosophy = document.getElementById("Philosophy");
    var Support = document.getElementById("Support");

    if (lang.startsWith("en")) {
        About.innerHTML = "About";
        Updates.innerHTML = "Updates";
        Contracts.innerHTML = "Contracts";
        Philosophy.innerHTML = "Our Philosophy";
        Support.innerHTML = "Support";
    }
    else if (lang.startsWith("tr")) {
        About.innerHTML = "Hakkımda";
        Updates.innerHTML = "Güncellemeler";
        Contracts.innerHTML = "Sözleşmeler";
        Philosophy.innerHTML = "Felsefemiz";
        Support.innerHTML = "Yardım";
    }
};