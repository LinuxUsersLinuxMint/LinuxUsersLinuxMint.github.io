var lang =  navigator.language || navigator.userLanguage

if (lang == "tr-TR" | lang == "tr") {
    document.location = "/TR/İndex.html";
}
else {
    document.location = "/EN/index.html";
}