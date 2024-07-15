var lang = navigator.language || navigator.userLanguage;
/**
 * Türkiye Cumhuriyeti Ve Diğer Türk ülkeleri /TR/index.html sayfasına gönderilecek şekilde ayarlanmıştır.
 * Web sitemiz sadece Türkçe ve İngilizce için destek vericektir. Harici diller için herhangi bir destek getirilmeyecektir.
 * Sadece Resmi dili Türkçe olan ülkeler /TR/index.html sayfasına gönderilecek şekilde ayarlanmıştır eğer Türkiye Cumhuriyeti ve Türk ülkelerinde yaşamıyorsanız
 * ancak Türkçe dilini kullanıyor iseniz /TR/index.html sayfasına girebilmek için kullandığınız Web tarayıcısından konum değiştiriniz. İşe yaramazsa lütfen /support/linuxuserslinuxmint/location.tr.html sayfasını ziyaret ediniz.
 */

if (lang == "tr-TR" | // Türkiye [1]
lang == "tr" | // [1]
lang == "tr_TR" | // [1]
lang == "ct-TR" | // Kuzey Kıbrıs Türkiye Cumhuriyeti [2]
lang == "ct_TR" | // [2]
lang == "CT_tr" | // [2]
lang == "CT-tr" | // [2]
lang == "az-AZ" | // Azerbeycan [3]
lang == "az_AZ" | // [3]
lang == "az" | // [3]
lang == "AZ" | // [3]
lang == "tm-TM" | // Türkmenistan [4]
lang == "tm_TM" | // [4]
lang == "tm" | // [4]
lang == "TM" |  // [4]
lang == "kz-KZ" | // Kazakitsan [5]
lang == "kz_KZ" | // [5]
lang == "kz" | // [5]
lang == "KZ" | // [5]
lang == "kg-KG" | // Kırgızistan [6]
lang == "kg_KG" | // [6]
lang == "kg" | // [6]
lang == "KG" | // [6]
lang == "uz-UZ" | // Özbekistan [7]
lang == "uz_UZ" | // [7]
lang == "uz" | // [7]
lang == "UZ") // [7] 
{
    //document.location.href = "/index.html";
}
else if (lang == "en-EN" | lang == "en" | lang == "en_US" | lang == "en-US") // This part has been postponed to an indefinite date.
{
    //document.location.href = "/index.html";
}
else if (lang != "en-EN" | lang != "en" | lang != "en_EN")
{
    alert("You are outside the TR or EN region. Support for languages of other countries has not been introduced.");
    //document.location.href = "/index.html";
}
//while (lang == "ıl-IL" | lang == "ıl" | lang == "ıl_IL" | lang == "ıl-IL")
//{
//    document.location.href = "/index.html"; // האתר בלולאה והופך ללא פעיל.
    // עקב המלחמות הנוכחיות, הוחלט כי LinuxUsersLinuxMint לא תספק שירות באופן קבוע למדינה הנקראת "ישראל". (צור תוכנה, אל תילחם.)
    // החלטה זו היא קבועה ולא תשונה.
//} 