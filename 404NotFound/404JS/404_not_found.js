window.onload = function() {
    var lang = navigator.language;
    var ErrorTitle = document.getElementById("ErrorTitle");
    var ErrorDescription = document.getElementById("ErrorDescription");
    var MainPage = document.getElementById("MainPage");
    var SupportPage = document.getElementById("SupportPage");

    if (lang.startsWith("en")) {
        ErrorTitle.innerHTML = "404 not found error";
        ErrorDescription.innerHTML = "The page you are looking for was not found or the page does not exist 404 not found error.";
        MainPage.innerHTML = "LinuxUsersLinuxMint - Main page";
        SupportPage.innerHTML = "LinuxUsersLinuxMint - Support page";
        console.error("LinuxUsersLinuxMint: 404 not found error. Sorry! The page or content you are trying to search for on this website may have been moved or deleted...");
        alert("404 not found error");
        document.title = "LinuxUsersLinuxMint - 404 Not found";
        SupportPage.href = "/support/index_en.html";
    }
    else if (lang.startsWith("tr")) {
        ErrorTitle.innerHTML = "404 bulunamadı hatası";
        ErrorDescription.innerHTML = "Aradığınız sayfa bulunamadı veya sayfa mevcut değil 404 bulunamadı hatası.";
        MainPage.innerHTML = "LinuxUsersLinuxMint - Ana sayfa";
        SupportPage.innerHTML = "LinuxUsersLinuxMint - Destek sayfası";
        console.error("LinuxUsersLinuxMint: 404 bulunamadı hatası. Üzgünüm! bu web sitesinde aramaya çalıştığınız sayfa veya içerik taşınmış veya silinmiş olabilir...");
        alert("404 bulunamadı hatası");
        document.title = "LinuxUsersLinuxMint - 404 bulunamadı";
        SupportPage.href = "/support/index_tr.html";
    }
};