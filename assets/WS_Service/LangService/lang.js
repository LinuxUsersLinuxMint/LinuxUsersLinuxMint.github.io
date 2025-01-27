var lang = navigator.language || navigator.userLanguage;
if (lang.startsWith("tr"))
{
    document.location.href = "/WS_Pages/TR/index.html";
}
else if (lang.startsWith("en"))
{
    document.location.href = "/WS_Pages/EN/index.html";
}
else if (lang != "en-EN" | lang != "en" | lang != "en_US" | lang != "en-US" | lang != "tr-TR" | lang != "tr" | lang != "tr_TR")
{
    alert("You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
}
else {
    console.log("[linuxuserslinuxmint.github.io]: You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
}