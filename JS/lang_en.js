var lang =  navigator.language || navigator.userLanguage;
if (lang == "tr-TR" | lang == "tr" | lang == "tr_TR") 
{
    document.location.href = "/TR/index.html";
}
else if (lang == "en-EN" | lang == "en" | lang == "en_US" | lang == "en-US")
{
    console.log("[linuxuserslinuxmint.github.io] USER_LOCATION=en_US");
}
else if (lang != "en-EN" | lang != "en" | lang != "en_US" | lang != "en-US")
{
    alert("You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
    document.location.href = "/index.html";
}
while (lang == "ıl-IL" | lang == "ıl" | lang == "ıl_IL" | lang == "ıl-IL")
{
    document.location.href = "/index.html"; // האתר בלולאה והופך ללא פעיל.
    // עקב המלחמות הנוכחיות, הוחלט כי LinuxUsersLinuxMint לא תספק שירות באופן קבוע למדינה הנקראת "ישראל". (צור תוכנה, אל תילחם.)
    // החלטה זו היא קבועה ולא תשונה.
}