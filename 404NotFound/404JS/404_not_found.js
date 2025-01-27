var lang = navigator.language || navigator.userLanguage;
if (lang.startsWith("tr"))
{
    console.error("LinuxUsersLinuxMint: 404 bulunamadı hatası. Üzgünüm! bu web sitesinde aramaya çalıştığınız sayfa veya içerik taşınmış veya silinmiş olabilir...");
    alert("404 bulunamadı hatası");
}
else if (lang.startsWith("en"))
{
    console.error("LinuxUsersLinuxMint: 404 not found error. Sorry! The page or content you are trying to search for on this website may have been moved or deleted...");
    alert("404 not found error");
}