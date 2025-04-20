window.onload = function()
{
    var lang = navigator.language;
    var contractstitle = document.getElementById("contractstitle");
    var author = document.getElementById("author");
    var whatsappchannel = document.getElementById("whatsappchannel");
    var wchannel = document.getElementById("wchannel");
    var agreementcontent = document.getElementById("agreementcontent");
    var createddate = document.getElementById("createddate");
    var agreementlocation = document.getElementById("agreementlocation");
    var contractstitle_1 = document.getElementById("contractstitle_1");
    var contractclause = document.getElementById("contractclause");
    var contractstitle_2 = document.getElementById("contractstitle_2");
    var contractclause_1 = document.getElementById("contractclause_1");
    var contractclause_2 = document.getElementById("contractclause_2");
    var contractclause_3 = document.getElementById("contractclause_3");
    var contractstitle_3 = document.getElementById("contractstitle_3");
    var contractclause_4 = document.getElementById("contractclause_4");
    var contractclause_5 = document.getElementById("contractclause_5");
    var contractclause_6 = document.getElementById("contractclause_6");
    var contractclause_7 = document.getElementById("contractclause_7");
    var contractstitle_4 = document.getElementById("contractstitle_4");
    var contractclause_8 = document.getElementById("contractclause_8");
    var contractclause_9 = document.getElementById("contractclause_9");

    if (lang.startsWith("tr"))
    {
        document.title = "LinuxUsersLinuxMint - Gizlilik sözleşmesi";
        contractstitle.innerHTML = "- Gizlilik Ve Güvenlik Sözleşmesi -";
        author.innerHTML = "Yazar: LinuxUsersLinuxMint";
        whatsappchannel.innerHTML = "LinuxUsersLinuxMint TR (WhatsApp): ";
        wchannel.innerHTML = "LinuxUsersLinuxMint TR";
        wchannel.href = "https://whatsapp.com/channel/0029VaedRagCXC3Fig5bpR3K";
        agreementcontent.innerHTML = "Sözleşme İçeriği: LinuxUsersLinuxMint github hesabında bulunan tüm hizmetler ve Depolar(projeler) içindir.";
        createddate.innerHTML = "Oluşturulma Tarihi: 10/20/2023 - 23:12";
        agreementlocation.innerHTML = "Sözleşme Konumu: linuxuserslinuxmint.github.io/Contracts/privacyandsecutryagreement/privacyandsecutryagreement";
        contractstitle_1.innerHTML = "- Gizlilik Ve Güvenlik Açıklaması -";
        contractclause.innerHTML = "* Bu gizlilik ve Güvenlik sözleşmesi, LinuxUsersLinuxMint web sitesi, hizmetleri ve projeleri İçin. Kullanıcılar için nasıl bir politika izlendiğini açıklamaktadır.";
        contractstitle_2.innerHTML = "- Gizlilik -";
        contractclause_1.innerHTML = "* LinuxUsersLinuxMint, Gizliliğe saygı duyar ve kullanıcılardan veri toplama veya bunları talep etmez.";
        contractclause_2.innerHTML = "* Ancak LinuxUsersLinuxMint Yazılımları yazılım verilerini bir dosyaya kaydetme hakkına sahiptir.";
        contractclause_3.innerHTML = "* Kaydedilen dosyalar LinuxUsersLinuxMint'e veya 3.Parti yazılımlar ve uygulamalara gönderilmeyecektir/paylaşılmayacaktır.";
        contractstitle_3.innerHTML = "- Güvenlik -";
        contractclause_4.innerHTML = "* LinuxUsersLinuxMint yazılımları ve hizmetleri güvenliğe önem verir Ve kullanıcı gizliliğine saygı duyup herhangi bir veri talep etmez.";
        contractclause_5.innerHTML = "* LinuxUsersLinuxMint Yazılımları Açık kaynak kod olmakla beraber güvenlidir.";
        contractclause_6.innerHTML = "* LinuxUsersLinuxMint kullanıcıları LinuxUsersLinuxMint yazılımlarını kendleri derleyip bu yazılımın LinuxUsersLinuxMint adlı organizasyona ait olduğunu / yazılımın kaynağını belirttiği sürece dağıtma hakkına sahiptir.";
        contractclause_7.innerHTML = "* LinuxUsersLinuxMint Yazılımları kullanıcılardan veri toplama veya bunları talep etmez.";
        contractstitle_4.innerHTML = "- Sözleşmeyi Reddetmek -";
        contractclause_8.innerHTML = "* Eğer Bu Gizlilik ve Güvenlik Sözleşmesi'ni reddediyor iseniz. LinuxUsersLinuxMint Yazılımlarını ve hizmetlerini kullanmayı";
        contractclause_9.innerHTML = "bırakmalısınız ve yazılımların bir kopyasını Cihazınızdan/Bilgisayarınız'dan kaldırmalısınız ve Kullanmamalısınız.";
    }
    else if (lang.startsWith("en"))
    {
        document.title = "LinuxUsersLinuxMint - Privacy agreement";
        contractstitle.innerHTML = "- Privacy and Security Agreement -";
        author.innerHTML = "Author: LinuxUsersLinuxMint";
        whatsappchannel.innerHTML = "LinuxUsersLinuxMint EN (WhatsApp): ";
        wchannel.innerHTML = "LinuxUsersLinuxMint EN";
        wchannel.href = "https://whatsapp.com/channel/0029VaeZcNO5q08d6yNaxT0z";
        agreementcontent.innerHTML = "Agreement Content: For all services and Repositories (projects) available in the LinuxUsersLinuxMint github account.";
        createddate.innerHTML = "Created Date: 10/20/2023 - 23:12";
        agreementlocation.innerHTML = "Contract Location: linuxuserslinuxmint.github.io/Contracts/privacyandsecutryagreement/privacyandsecutryagreement";
        contractstitle_1.innerHTML = "- Privacy and Security Disclosure -";
        contractclause.innerHTML = "* This privacy and security agreement is for the LinuxUsersLinuxMint website, services and projects. It explains what kind of policy is followed for users.";
        contractstitle_2.innerHTML = "- Privacy -";
        contractclause_1.innerHTML = "* LinuxUsersLinuxMint respects Privacy and does not collect or solicit data from users.";
        contractclause_2.innerHTML = "* However, LinuxUsersLinuxMint Software has the right to save software data to a file.";
        contractclause_3.innerHTML = "* Saved files will not be sent/shared to LinuxUsersLinuxMint or 3rd Party software and applications.";
        contractstitle_3.innerHTML = "- Security -";
        contractclause_4.innerHTML = "* LinuxUsersLinuxMint software and services care about security and respect user privacy and do not request any data.";
        contractclause_5.innerHTML = "* LinuxUsersLinuxMint Software is open source and safe.";
        contractclause_6.innerHTML = "* LinuxUsersLinuxMint users have the right to compile and distribute LinuxUsersLinuxMint software themselves, as long as they indicate that this software belongs to the organization called LinuxUsersLinuxMint / the source of the software.";
        contractclause_7.innerHTML = "* LinuxUsersLinuxMint Software does not collect or solicit data from users.";
        contractstitle_4.innerHTML = "- Rejecting the Contract -";
        contractclause_8.innerHTML = "* If you reject this Privacy and Security Agreement. LinuxUsersUsing LinuxMint Software and Services You must leave and remove one copy of the software from your Device/Computer and not use it.";
        contractclause_9.innerHTML = "You must leave and remove one copy of the software from your Device/Computer and not use it.";
    }
}