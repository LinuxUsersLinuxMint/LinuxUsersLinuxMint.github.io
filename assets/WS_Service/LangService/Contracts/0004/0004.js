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
    
    if (lang.startsWith("tr"))
    {
        document.title = "LinuxUsersLinuxMint - Web arşivi sözleşmesi";
        contractstitle.innerHTML = "- LinuxUsersLinuxMint Web Arşivi Sözleşmesi -";
        author.innerHTML = "Yazar: LinuxUsersLinuxMint";
        whatsappchannel.innerHTML = "LinuxUsersLinuxMint TR (WhatsApp): ";
        wchannel.href = "https://whatsapp.com/channel/0029VaedRagCXC3Fig5bpR3K";
        wchannel.innerHTML = "LinuxUsersLinuxMint TR";
        agreementcontent.innerHTML = "Sözleşme İçeriği: LinuxUsersLinuxMint ile ilgili Web Arşivleri içindir.";
        createddate.innerHTML = "Oluşturulma Tarihi: 05/09/2024 - 23:28";
        agreementlocation.innerHTML = "Sözleşme Konumu: linuxuserslinuxmint.github.io/Contracts/linuxuserslinuxmintarchiveagreement/linuxuserslinuxmintarchiveagreement";
        contractstitle_1.innerHTML = "- Web Arşivi Sözleşmesi açıklaması -";
        contractclause.innerHTML = "* Bu sözleşme LinuxUsersLinuxMint adlı organizasyonun LinuxUsersLinuxMint olarak ve LinuxUsersLinuxMint Web sitesi olarak arşivleme politikalarını anlatır.";
        contractstitle_2.innerHTML = "- Web Arşivi Sözleşmesi -";
        contractclause_1.innerHTML = "* LinuxUsersLinuxMint, 02/12/2024 tarihinden itibaren Web sitesi için Arşiv yedeklerini tutmaya başlamıştır ve düzenli olarak Web sitesi için Arşivler oluşturulacaktır ancak LinuxUsersLinuxMint tarafından böyle bir hizmetin sağlanıp/sağlanmayacağı garanti edilemez.";
        contractclause_2.innerHTML = "* LinuxUsersLinuxMint, Web Arşiv yedeklerini tutmak ile yükümlü değildir ve karar değiştirdiğinde Web sitesi için oluşturmuş olduğu arşivleri silme yetkisine sahiptir.";
        contractclause_3.innerHTML = "* LinuxUsersLinuxMint, Web arşivleri eski sürümleri içerir ve kayıt alınan arşivlerle ilgili herhangi bir düzeltme yapılmaz.";
        contractstitle_3.innerHTML = "- Arşiv sözleşmesi -";
        contractclause_4.innerHTML = "* LinuxUsersLinuxMint, ilerleyen vakitlerde tüm yazılımların 1 yıl dan daha eski sürümleri için arşivleme hizmeti sunacaktır (Arşiv yedekleri Web sitesinde tutulacaktır).";
        contractclause_5.innerHTML = "* LinuxUsersLinuxMint ve LinuxUsersLinuxMint Web sitesi için oluşturulan arşivler paylaşılamaz. ";
        contractclause_6.innerHTML = "* LinuxUsersLinuxMint kullanıcıları LinuxUsersLinuxMint adlı organizasyonun oluşturmuş olduğu arşivleri dağıtma hakkına/yetkisine sahip değildir (Arşivler sadece LinuxUsersLinuxMint web sitesinden görüntülenebilir).";
        contractstitle_4.innerHTML = "- Sözleşmeyi Reddetmek -";
        contractclause_7.innerHTML = "* Eğer Bu LinuxUsersLinuxMint Web Arşiv Sözleşmesi'ni reddediyor iseniz. LinuxUsersLinuxMint Yazılımlarını Ve hizmetlerini kullanmayı";
        contractclause_8.innerHTML = "bırakmalısınız ve yazılımların bir kopyasını Cihazınızdan/Bilgisayarınız'dan kaldırmalısınız ve Kullanmamalısınız.";
    }
    else if (lang.startsWith("en"))
    {
        document.title = "LinuxUsersLinuxMint - Web archive agreement";
        contractstitle.innerHTML = "- LinuxUsersLinuxMint Web Archive Agreement -";
        author.innerHTML = "Author: LinuxUsersLinuxMint";
        whatsappchannel.innerHTML = "LinuxUsersLinuxMint EN (WhatsApp): ";
        wchannel.href = "https://whatsapp.com/channel/0029VaeZcNO5q08d6yNaxT0z";
        wchannel.innerHTML = "LinuxUsersLinuxMint EN";
        agreementcontent.innerHTML = "Agreement Content: For LinuxUsersLinuxMint related Web Archives.";
        createddate.innerHTML = "Created Date: 05/09/2024 - 23:28";
        agreementlocation.innerHTML = "Contract Location: linuxuserslinuxmint.github.io/Contracts/linuxuserslinuxmintarchiveagreement/linuxuserslinuxmintarchiveagreement";
        contractstitle_1.innerHTML = "- Web Archive Agreement description -";
        contractclause.innerHTML = "* This agreement describes the archiving policies of the organization named LinuxUsersLinuxMint as LinuxUsersLinuxMint and as the LinuxUsersLinuxMint Web site.";
        contractstitle_2.innerHTML = "- Web Archive Agreement -";
        contractclause_1.innerHTML = "* LinuxUsersLinuxMint has started to maintain Archive backups for the Website as of 02/12/2024 and Archives will be created for the Website on a regular basis, but there is no guarantee that such service will be provided by LinuxUsersLinuxMint.";
        contractclause_2.innerHTML = "* LinuxUsersLinuxMint is under no obligation to maintain Web Archive backups and is authorized to delete any archives it has created for the Website at its discretion.";
        contractclause_3.innerHTML = "* LinuxUsersLinuxMint, Web archives contain old versions and no corrections are made to the archives that are saved.";
        contractstitle_3.innerHTML = "- Archive agreement -";
        contractclause_4.innerHTML = "* LinuxUsersLinuxMint will eventually offer archiving services for all software versions older than 1 year (Archive backups will be kept on the Web site).";
        contractclause_5.innerHTML = "* The archives created for LinuxUsersLinuxMint and the LinuxUsersLinuxMint Web site may not be shared. ";
        contractclause_6.innerHTML = "* LinuxUsersLinuxMint users do not have the right/authority to distribute archives created by the organization LinuxUsersLinuxMint (Archives can only be viewed on the LinuxUsersLinuxMint website).";
        contractstitle_4.innerHTML = "- Rejecting the Agreement -";
        contractclause_7.innerHTML = "* If you reject this LinuxUsersLinuxMint Web Archive Agreement. LinuxUsersLinuxMint Software and services";
        contractclause_8.innerHTML = "You must stop and remove a copy of the software from Your Device/Computer and Not Use";
    }
}