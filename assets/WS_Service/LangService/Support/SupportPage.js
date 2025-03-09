window.onload = function() {
    var lang = navigator.language || navigator.userLanguage;
    var changelocation = document.getElementById("changelocation");
    var lxlmdoc = document.getElementById("lxlmdoc");

    if (lang.startsWith("en")) {
        changelocation.innerHTML = "Change location for the website";
        lxlmdoc.innerHTML = "Documentation for LinuxUsersLinuxMint software";
        document.title = "LinuxUsersLinuxMint - Support Page";
    }
    else if (lang.startsWith("tr")) {
        changelocation.innerHTML = "Web sitesi için konum değiştirme";
        lxlmdoc.innerHTML = "LinuxUsersLinuxMint yazılımları için dokümanlar";
        document.title = "LinuxUsersLinuxMint - Destek Sayfası"
    }
};