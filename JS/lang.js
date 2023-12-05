var lang =  navigator.language || navigator.userLanguage;
if (lang == "tr-TR" | lang == "tr" | lang == "tr_TR") 
{
    document.location.href = "/index.html";
}
else if (lang == "en-EN" | lang == "en" | lang == "en_US" | lang == "en-US")
{
    document.location.href = "/index.html";
}
//else if (lang != "en-EN" | lang != "en" | lang != "en_US" | lang != "en-US" | lang != "tr-TR" | lang != "tr" | lang != "tr_TR")
//{
//    alert("You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
//}
//else if (lang == "ıl_IL" | lang == "ıl" | lang == "ıl-IL" | lang == "il-İL" | lang == "il" | lang == "il_İL")
//{
//    document.location.href = "/index.html"; // האתר בלולאה והופך ללא פעיל.
    // עקב המלחמות הנוכחיות, הוחלט כי LinuxUsersLinuxMint לא תספק שירות באופן קבוע למדינה הנקראת "ישראל". (צור תוכנה, אל תילחם.)
    // החלטה זו היא קבועה ולא תשונה.
//}
//else {
//    console.log("[linuxuserslinuxmint.github.io]: You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
//}