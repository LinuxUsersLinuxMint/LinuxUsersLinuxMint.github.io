var lang = navigator.language || navigator.userLanguage;
if (lang == "tr-TR" | lang == "tr" | lang == "tr_TR")
{
    console.error("LinuxUsersLinuxMint: 404 bulunamadı hatası. Üzgünüm! bu web sitesinde aramaya çalıştığınız sayfa veya içerik taşınmış veya silinmiş olabilir...");
    alert("404 bulunamadı hatası");
}
else if (lang == "en-EN" | lang == "en" | lang == "en_US" | lang == "en-US") // This part has been postponed to an indefinite date.
{
    console.error("LinuxUsersLinuxMint: 404 not found error. Sorry! The page or content you are trying to search for on this website may have been moved or deleted...");
    alert("404 not found error");
}