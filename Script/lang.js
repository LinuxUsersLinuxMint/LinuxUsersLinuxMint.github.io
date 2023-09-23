var lang =  navigator.language || navigator.userLanguage
if (lang == "tr-TR" | lang == "tr") {
    document.location.href = "/TR/"
}
else {
    document.location.href = "/EN/";
}