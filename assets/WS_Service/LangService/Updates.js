window.onload = function() {
    var lang = navigator.language;
    var updates_page_title = document.getElementById("updates_page_title");
    var updates_one_date = document.getElementById("updates_one_date");
    var updates_one = document.getElementById("updates_one");

    if (lang.startsWith("en")) {
        document.title = "LinuxUsersLinuxMint - Web site update notes";
        updates_page_title.innerHTML = document.title;
        updates_one_date.childNodes[0].nodeValue = "8/2/2025 - 6:12 PM (2 August, 2025):";
        updates_one.innerHTML = "There is now an update notes page for the website, allowing users to see the changes that have been made.";
    }
    else if (lang.startsWith("tr")) {
        document.title = "LinuxUsersLinuxMint - Web sitesi güncelleme notları";
        updates_page_title.innerHTML = document.title;
        updates_one_date.childNodes[0].nodeValue = "2/8/2025 - 18:12 (2 Ağustos, 2025):";
        updates_one.innerHTML = "Artık web sitesi için güncelleme notları sayfası mevcuttur bu sayede kullanıcılar yapılan değişiklikleri görebileceklerdir.";
    }
};