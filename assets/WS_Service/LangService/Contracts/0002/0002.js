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
        document.title = "LinuxUsersLinuxMint - Web sitesi sözleşmesi";
        contractstitle.innerHTML = "- LinuxUsersLinuxMint Web (Sitesi) Sözleşmesi -";
        author.innerHTML = "Yazar: LinuxUsersLinuxMint";
        whatsappchannel.innerHTML = "LinuxUsersLinuxMint TR (WhatsApp): "
        wchannel.innerHTML = "LinuxUsersLinuxMint TR";
        wchannel.href = "https://whatsapp.com/channel/0029VaedRagCXC3Fig5bpR3K";
        agreementcontent.innerHTML = "Sözleşme İçeriği: LinuxUsersLinuxMint Web sitesi ve LinuxUsersLinuxMint Organizasyonu içindir.";
        createddate.innerHTML = "Oluşturulma Tarihi: 02/12/2024 - 21:03";
        agreementlocation.innerHTML = "Sözleşme Konumu: linuxuserslinuxmint.github.io/Contracts/linuxuserslinuxmintwebsiteagreement/tr/linuxuserslinuxmintwebsiteagreement";
        contractstitle_1.innerHTML = "- Web Sözleşmesi açıklaması -";
        contractclause.innerHTML = "* Bu LinuxUsersLinuxMint Web (Sitesi) Sözleşmesi LinuxUsersLinuxMint'ın web sitesinde ve Organizasyon olarak nasıl bir yol izlediğini açıklar.";
        contractstitle_2.innerHTML = "- Web Sözleşmesi -";
        contractclause_1.innerHTML = "* LinuxUsersLinuxMint, Gizliliğe saygı duyar ve kullanıcılardan veri toplama veya bunları talep etmez.";
        contractclause_2.innerHTML = "* LinuxUsersLinuxMint, kullanıcıların web sitesinde kolaylıkla gezinebilmeleri gerektiğini düşünür ve web sitesini kullanım kolaylığına uyulacak şekilde tasarlar.";
        contractclause_3.innerHTML = "* LinuxUsersLinuxMint, Web sitesinde yer alan tüm içeriklerin sade ve anlaşılabilir olmasını gerektiğini düşünür ve sözleşmeleri de bu üslüba uygun bir şekilde yazılır.";
        contractstitle_3.innerHTML = "- Yazılım Sözleşmesi -";
        contractclause_4.innerHTML = "* LinuxUsersLinuxMint bütün yazılımları kullanım kolaylığına uygun olucak şekilde düzenlenir (Kullanıma sunulmadan önce).";
        contractclause_5.innerHTML = "* LinuxUsersLinuxMint yazılımları hataların ve sorunların hızlı bir biçimde farkedilebilmesi için açık kaynak olarak yayımlar.";
        contractclause_6.innerHTML = "* LinuxUsersLinuxMint kullanıcıları LinuxUsersLinuxMint yazılımlarını kendleri derleyip bu yazılımın LinuxUsersLinuxMint adlı organizasyona ait olduğunu / yazılımın kaynağını belirttiği sürece dağıtma hakkına sahiptir.";
        contractstitle_4.innerHTML = "- Sözleşmeyi Reddetmek -";
        contractclause_7.innerHTML = "* Eğer Bu LinuxUsersLinuxMint Web (Sitesi) Sözleşmesi'ni reddediyor iseniz. LinuxUsersLinuxMint Yazılımlarını Ve hizmetlerini kullanmayı";
        contractclause_8.innerHTML = "bırakmalısınız ve yazılımların bir kopyasını Cihazınızdan/Bilgisayarınız'dan kaldırmalısınız Ve Kullanmamalısınız.";
    }
    else if (lang.startsWith("en"))
    {
        document.title = "LinuxUsersLinuxMint - Web site agreement";
        contractstitle.innerHTML = "- LinuxUsersLinuxMint Web Site Agreement -";
        author.innerHTML = "Author: LinuxUsersLinuxMint";
        whatsappchannel.innerHTML = "LinuxUsersLinuxMint EN (WhatsApp): "
        wchannel.innerHTML = "LinuxUsersLinuxMint EN";
        wchannel.href = "https://whatsapp.com/channel/0029VaeZcNO5q08d6yNaxT0z";
        agreementcontent.innerHTML = "Agreement Content: For the LinuxUsersLinuxMint Website and the LinuxUsersLinuxMint Organization.";
        createddate.innerHTML = "Creation Date: 02/12/2024 - 21:03";
        agreementlocation.innerHTML = "Contract Location: linuxuserslinuxmint.github.io/Contracts/linuxuserslinuxmintwebsiteagreement/en/linuxuserslinuxmintwebsiteagreement";
        contractstitle_1.innerHTML = "- Web Agreement description -";
        contractclause.innerHTML = "* This LinuxUsersLinuxMint Web (Site) Agreement explains how LinuxUsersLinuxMint operates on its website and as an Organization.";
        contractstitle_2.innerHTML = "- Web Agreement -";
        contractclause_1.innerHTML = "* LinuxUsersLinuxMint respects Privacy and does not collect or solicit data from users.";
        contractclause_2.innerHTML = "* LinuxUsersLinuxMint believes that users should be able to navigate the website easily and designs the website to ensure ease of use.";
        contractclause_3.innerHTML = "* LinuxUsersLinuxMint believes that all content on the website should be simple and understandable, and its agreements are written in accordance with this style.";
        contractstitle_3.innerHTML = "- Software Agreement -";
        contractclause_4.innerHTML = "* All LinuxUsersLinuxMint software is arranged for ease of use (before it is made available).";
        contractclause_5.innerHTML = "* LinuxUsersLinuxMint publishes software as open source so that errors and problems can be detected quickly.";
        contractclause_6.innerHTML = "* LinuxUsersLinuxMint users have the right to compile and distribute LinuxUsersLinuxMint software themselves, as long as they indicate that this software belongs to the organization called LinuxUsersLinuxMint / the source of the software.";
        contractstitle_4.innerHTML = "- Rejecting the Agreement -";
        contractclause_7.innerHTML = "* If you reject this LinuxUsersLinuxMint Web (Site) Agreement. LinuxUsersUsing LinuxMint Software and Services";
        contractclause_8.innerHTML = "You must leave and remove one copy of the software from your Device/Computer and not use it."; 
    }
}