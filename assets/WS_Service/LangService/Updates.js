window.onload = function() {
    var lang = navigator.language;
    var updates_page_title = document.getElementById("updates_page_title");
    var updates_one_date = document.getElementById("updates_one_date");
    var updates_one = document.getElementById("updates_one");
    var updates_two_date = document.getElementById("updates_two_date");
    var updates_two = document.getElementById("updates_two");
    var bug_fix_one = document.getElementById("bug_fix_one");

    if (lang.startsWith("en")) {
        document.title = "LinuxUsersLinuxMint - Web site update notes";
        updates_page_title.innerHTML = document.title;
        updates_one_date.childNodes[0].nodeValue = "8/2/2025 - 6:12 PM (2 August, 2025):";
        updates_one.innerHTML = "There is now an update notes page for the website, allowing users to see the changes that have been made.";
        updates_two_date.childNodes[0].nodeValue = "8/3/2025 - 2:50 PM (3 August, 2025):";
        updates_two.innerHTML = "The existing 404 error page for the website has been revamped and rebuilt using <a class=\"home\" href=\"https://getbootstrap.com/\">Bootstrap CSS</a>.";
    }
    else if (lang.startsWith("tr")) {
        document.title = "LinuxUsersLinuxMint - Web sitesi güncelleme notları";
        updates_page_title.innerHTML = document.title;
        updates_one_date.childNodes[0].nodeValue = "2/8/2025 - 18:12 (2 Ağustos, 2025):";
        updates_one.innerHTML = "Artık web sitesi için güncelleme notları sayfası mevcuttur bu sayede kullanıcılar yapılan değişiklikleri görebileceklerdir.";
        updates_two_date.childNodes[0].nodeValue = "3/8/2025 - 14:50 (3 Ağustos, 2025):";
        updates_two.innerHTML = "Web sitesi için mevcut olan 404 hata sayfası yenilenmiştir ve <a class=\"home\" href=\"https://getbootstrap.com/\">Bootstrap CSS</a> ile yeniden yapılmıştır.";
        bug_fix_one.innerHTML = "Sözleşmeler sayfasında güncellemeler sayfası için eksik bağlantı eklenmiştir.";
    }
};