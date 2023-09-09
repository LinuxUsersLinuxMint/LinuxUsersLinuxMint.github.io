var lang =  navigator.language || navigator.userLanguage

if (lang == "tr-TR" | lang == "tr") {
    document.location.href = "/TR/İndex.html";
}
else {
    document.location.href = "/EN/index.html";
}
