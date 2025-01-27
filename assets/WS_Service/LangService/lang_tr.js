var lang = navigator.language || navigator.userLanguage;
if (lang == "tr-TR" | lang == "tr" | lang == "tr_TR")
{
    console.log("[linuxuserslinuxmint.github.io]: USER_LOCATION= Türkiye or Turkish countries");
    document.location.href = "/index.html";
}
else if (lang == "en-EN" | lang == "en" | lang == "en_US" | lang == "en-US")
{
    document.location.href = "/index.html";
}
else if (lang != "tr-TR" | lang != "tr" | lang != "tr_TR")
{
    alert("You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
    document.location.href = "/index.html";
}
