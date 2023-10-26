var lang =  navigator.language || navigator.userLanguage;
if (lang == "tr-TR" | lang == "tr" | lang == "tr_TR") 
{
    document.location.href = "/TR/index.html";
}
else if (lang == "en-EN" | lang == "en" | lang == "en_US" | lang == "en-US")
{
    document.location.href = "/EN/index.html";
}
else if (lang == "ıl-IL" | lang == "ıl" | lang == "ıl_IL" | lang == "ıl-IL")
{
    document.location.href = "/index.html";
    // עד שהמלחמה הזו תיפסק. בתור LinuxUsersLinuxMint, הוחלט שלא לשרת את המדינה שנקראת "ישראל". (לייצר תוכנה, לא מלחמה.)
}
else if (lang != "en-EN" | lang != "en" | lang != "en_US" | lang != "en-US" | lang != "tr-TR" | lang != "tr" | lang != "tr_TR")
{
    alert("You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
}
