"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./services-single.css";
import { usePathname, useRouter } from "next/navigation";

interface KondisionerNasazliqSebepleri {
  səbəb: string;
  izah: string;
}

interface ApplianceService {
  id: string;
  name: string;
  description: string;
  img: any;
  text: string;
  moretext: string;
  serviceUrl?: string;
  kondisionerNasazliqSebeleri: KondisionerNasazliqSebepleri[];
}

const applianceServices: ApplianceService[] = [
  {
    id: "kondisioner",
    name: "Kondisioner Təmiri",
    description:
      "Kondisionerlərin professional təmiri. Soyutma sisteminin tam diaqnostikası və bərpası.",
    text: "Kondisionerlərin sıradan çıxma səbəbləri çoxsaylı ola bilər, lakin bunlardan əsasları bir neçədir. Təmirə ehtiyac bir qayda olaraq istehsal xətası və ya qaydalara riayət olunmadan quraşdırılma nəticəsində ortaya çıxır. Digər məşhur səbəblərə blokun zədələnməsi, düzgün olmayan istismar və soyuducu mayenin (freon qazlarının) sızması aiddir. Bütün bu kimi hallarda nasazlığın aradan qaldırılması ilə mütəxəssis məşğul olmalıdır.Müstəqil surətdə (özbaşına) nöqsanı aradan qaldırmaq üçün cəhd daha ciddi problemlərə gətirib çıxara bilər. Müasir texniki xidmət sonrakı əsaslı təmir zərurətindən xilas olmağa imkan verir. Əgər təmir əsl peşəkarlar tərəfindən aprılırsa, nasazlığın səbəbi müasir diaqnostik avadanlığın köməyilə müəyyən edilir, sonra isə tez və effektiv şəkildə aradan qaldırılır. Bənzər işlərin siyahısında xarici blokun təmizlənməsi, soyuducu mayenin normaya uyğun sistemə vurulması, kompressorun, filtrin, istilik mübadiləsi qurğusunun və s. dəyişdirilməsi ola bilər. Əgər oxşar nasazlıq sizin kondisionerinizdə baş veribsə,bu halda onun aradan qaldırılmasını uzun müddətə təxirə salmayın və isti havanın sizə əziyyət verməsinə icazə verməyin. Soliton Service şirkətinin mütəxəssisləri çox qısa zaman ərzində sıradan çıxmış kondisionerlərin təmirini həyata keçirəcək. Qeyd edək ki, havanın temperaturu yay vaxtlarında nə qədər istidirsə kondisionerlərin sıradan çıxma halları bir o qədər çox baş verir.Münasib olmayan vaxtda kondisionerin təcili təmirinə ehtiyac olmasın deyə hər bir kondisioner sahibi nasazlığa gətirib çıxaran səbəbləri bilməlidir.",
    moretext:
      "Kondisionerlərin nasazlığının beş əsas səbəbi: Toz və kirin yığılması Kondisionerin filtirləri və hava keçidlərində toz və kirin yığılması hava axışını azaldır, nəticədə cihazın soyutma və ya isitmə funksiyası zəifləyir. Soyutma mayesinin (Freon) azalması Soyutma mayesi (Freon) səviyyəsinin aşağı düşməsi, kondisionerin soyutma qabiliyyətini itirməsinə və ya tamamilə dayandırılmasına səbəb ola bilər. Elektrik problemi Kondisionerin elektrik bağlantılarında, naqillərdə və ya cihazın güc mənbəyində nasazlıqlar yaranarsa, cihazın işini dayandıra bilər. Kompressor nasazlığ Kompressor, kondisionerin ən vacib hissəsidir və onun nasazlığı cihazın ümumi fəaliyyətinə mənfi təsir edir. Kompressorda yaranan problemlər, cihazın soyutma və isitmə funksiyalarını poza bilər. Termostat və ya sensor problemi Termostat və ya temperatur sensoru düzgün işləmədikdə, kondisioner istədiyiniz temperaturu saxlamaqda çətinlik çəkir və cihazın düzgün işləməməsinə səbəb ola bilər.",
    img: "/xidmet.png",
    serviceUrl: "kondisioner-temiri",
    kondisionerNasazliqSebeleri: [
      {
        səbəb: "Toz və kirin yığılması",
        izah: "Kondisionerin filtirləri və hava keçidlərində toz və kirin yığılması hava axışını azaldır, nəticədə cihazın soyutma və ya isitmə funksiyası zəifləyir.",
      },
      {
        səbəb: "Soyutma mayesinin (Freon) azalması",
        izah: "Soyutma mayesi (Freon) səviyyəsinin aşağı düşməsi, kondisionerin soyutma qabiliyyətini itirməsinə və ya tamamilə dayandırılmasına səbəb ola bilər.",
      },
      {
        səbəb: "Elektrik problemi",
        izah: "Kondisionerin elektrik bağlantılarında, naqillərdə və ya cihazın güc mənbəyində nasazlıqlar yaranarsa, cihazın işini dayandıra bilər.",
      },
      {
        səbəb: "Kompressor nasazlığı",
        izah: "Kompressor, kondisionerin ən vacib hissəsidir və onun nasazlığı cihazın ümumi fəaliyyətinə mənfi təsir edir. Kompressorda yaranan problemlər, cihazın soyutma və isitmə funksiyalarını poza bilər.",
      },
      {
        səbəb: "Termostat və ya sensor problemi",
        izah: "Termostat və ya temperatur sensoru düzgün işləmədikdə, kondisioner istədiyiniz temperaturu saxlamaqda çətinlik çəkir və cihazın düzgün işləməməsinə səbəb ola bilər.",
      },
    ],
  },
  {
    id: "paltaryuyan",
    name: "Paltaryuyan Təmiri",
    description:
      "Paltaryuyan maşınların keyfiyyətli təmiri. Bütün növ çamaşır maşınları üçün kompleks xidmət.",
    img: "/xidmet2.webp",
    moretext: "",
    text: `Paltaryuyan maşınları müasir ev təsərrüfatının ən vacib texniki avadanlıqlarından biridir. Onların düzgün işləməsi gündəlik həyatımızın ən əhəmiyyətli hissələrindəndir. Paltaryuyan maşını, istifadəçilər üçün həm rahatlıq, həm də vaxta qənaət imkanı təmin edir. Lakin, digər ev cihazları kimi, paltaryuyan maşınları da müxtəlif səbəblərdən nasazlıq verə bilər və bu zaman peşəkar təmirə ehtiyac duyulur.
  
  Soliton Service olaraq, biz paltaryuyan maşınlarının hər bir növünü təmir etmək üçün geniş təcrübəyə və müasir avadanlıqlara sahibik. Təmir prosesində ən vacib amil, maşının dəqiq təmiri və uzun müddət davamlı işləməsidir. Bizim peşəkar komandamız, paltaryuyan maşınlarının bütün daxili mexanizmlərini ətraflı şəkildə yoxlayır, nasazlıq səbəblərini dəqiq şəkildə müəyyən edir və uyğun həllər təqdim edir.
  
  Paltaryuyan maşınlarının təmirində istifadə etdiyimiz orijinal ehtiyat hissələri və müasir texnologiyalar, cihazın funksiyalarını uzun müddət qorumağa imkan verir. Bizim əsas hədəfimiz, təmir edilən maşınların bir daha hər hansı bir nasazlıq yaşamaması və müştərilərimizin məmnuniyyətini təmin etməkdir. Təmir sonrası, biz hər bir paltaryuyan maşınının düzgün işləməsini təmin etmək üçün müvafiq sınaqlar keçiririk və hər bir təmiri zəmanət altına alırıq.
  
  Paltaryuyan maşınlarının nasazlıqlarını müəyyən etmək bəzən çətin ola bilər, amma bizim təcrübəli mütəxəssislərimiz bu cür problemləri tez bir zamanda aşkara çıxara bilərlər. Həmçinin, paltaryuyan maşınının uzun müddət işləməsi üçün mütəmadi olaraq texniki xidmət göstərməyin vacib olduğunu unutmayın. Bu, cihazın ömrünü uzatmaq və təkrarlanan nasazlıqları önləmək üçün əhəmiyyətlidir.
  
  Soliton Service ilə paltaryuyan maşınlarınızın təmiri həm sürətli, həm də etibarlıdır. Bizim peşəkar xidmətlərimizdən istifadə edərək, paltaryuyan maşınınızın keyfiyyətli təmirinə və uzun müddət davamlı işləməsinə zəmanət veririk. Bizimlə əlaqə saxlayın və evinizdə rahatlığı bərpa edin!`,
    serviceUrl: "paltaryuyan-temiri",
    kondisionerNasazliqSebeleri: [
      {
        səbəb: "Nasos problemi",
        izah: "Paltaryuyan maşınlarında nasosun düzgün işləməməsi, suyun dövranını dayandıra bilər və ya maşının suyu boşaltmasına mane ola bilər. Nasosun nasazlığı, çirkli suyun çıxarılmamasına səbəb olaraq maşının funksionallığını azaldır.",
      },
      {
        səbəb: "İdarəetmə paneli nasazlığı",
        izah: "Elektron idarəetmə blokları və ya sensorlar paltaryuyan maşınının düzgün işləməməsinə səbəb ola bilər. Əgər idarəetmə paneli zədələnirsə, maşın proqramları və funksiyalar arasında keçid etməkdə çətinlik çəkə bilər.",
      },
      {
        səbəb: "Su təchizatı problemi",
        izah: "Paltaryuyan maşınlarının su təchizatı sistemi müəyyən səbəblərlə nasazlıq verə bilər. Suyu kifayət qədər qəbul etməməsi və ya suyun düzgün dövran etməməsi, maşının tam performansla işləməsini maneə törədir.",
      },
      {
        səbəb: "Dönmə (spin) funksiyası",
        izah: "Paltaryuyan maşınlarının dönmə funksiyası zədələnə bilər. Dönmə dövrü normalda yüksək sürətlə və balanslı şəkildə işləməli olsa da, əgər bu mexanizm nasazdırsa, paltarlar düzgün sıxılmayacaq və nəm qalacaq.",
      },
      {
        səbəb: "Mühərrik və ya qoruyucu sistem problemləri",
        izah: "Mühərrik, paltaryuyan maşınının işləməsini təmin edir və hər hansı bir problem halında maşın işə düşə bilməz. Bundan əlavə, qoruyucu mexanizmlər də nasaz olduqda maşın düzgün işləməyə bilər.",
      },
      {
        səbəb: "Su sızması",
        izah: "Paltaryuyan maşınlarında suyun sızması müxtəlif səbəblərdən baş verə bilər. Qapaqların, şlanqların və ya boruların zədələnməsi nəticəsində suyun xaricə çıxması, evdəki ziyanlı vəziyyətlərə səbəb ola bilər.",
      },
    ],
  },
  {
    id: "qabyuyan",
    name: "Qabyuyan Təmiri",
    description:
      "Qabyuyan maşınların diaqnostikası və operativ təmiri. Zəmanətli xidmət.",
    img: "/xidmet3.jpeg",
    moretext: "",
    text: `Qabyuyan maşınları müasir mətbəxlərin vazkeçilməz texniki avadanlığıdır. Bu cihazlar, mətbəx işlərinin daha səmərəli və rahat aparılmasını təmin edərək, zaman və əməyin qənaətinə səbəb olur. Lakin, hər bir cihaz kimi, qabyuyan maşınları da müəyyən nasazlıqlar yaşaya bilər və düzgün işləməməsi, gündəlik həyatın rahatlığını əhəmiyyətli dərəcədə poza bilər. 
  
  Soliton Service şirkəti olaraq, biz qabyuyan maşınlarının təmirində peşəkar yanaşma və yüksək keyfiyyətli xidmət təklif edirik. Təcrübəli və ixtisaslı mütəxəssislərimiz, qabyuyan maşınlarının hər cür nasazlıqlarını sürətlə aşkar edir və həll edir. Təmir prosesi, maşının daxili mexanizmlərindən tutmuş, su təchizatı və nasos sistemlərinə qədər bütün sahələri əhatə edir.
  
  Qabyuyan maşınının təmiri zamanı, biz yalnız orijinal ehtiyat hissələrdən istifadə edirik və hər bir təmiri zəmanət altına alırıq. Müştərilərimizə yalnız yüksək keyfiyyətli və etibarlı xidmət təqdim etməyi hədəfləyirik. Təmir sonrası hər bir maşın sınaqdan keçirilir və düzgün işləməsi təmin edilir. Bizim məqsədimiz, cihazınızın yalnız təmir edilməsi deyil, eyni zamanda uzun müddət dayanıqlı işləməsidir.
  
  Qabyuyan maşınının nasazlığı, heç də yalnız bir texniki problem deyil; bu, həm də sizin mətbəxinizin və gündəlik həyatınızın rahatlığını təsir edən bir vəziyyətdir. Bizimlə əlaqə saxlayaraq, qabyuyan maşınınızın təmirini qısa müddət ərzində, etibarlı və zəmanətli şəkildə həll edə bilərsiniz. Soliton Service ilə təmiz qablar və rahat mətbəx sizinlədir!`,
    serviceUrl: "qabyuyan-temiri",
    kondisionerNasazliqSebeleri: [
      {
        səbəb: "Nasos problemi",
        izah: "Qabyuyan maşınlarında nasosun düzgün işləməməsi, suyun dövranını dayandıra bilər və ya maşının suyu boşaltmasına mane ola bilər. Bu nasazlıq cihazın düzgün işləməməsinə səbəb olur.",
      },
      {
        səbəb: "Su təchizatı problemi",
        izah: "Qabyuyan maşınlarının su təchizatı sistemində yaranan nasazlıq, suyun maşına daxil olmaması və ya suyun düzgün şəkildə istifadə olunmaması ilə nəticələnə bilər.",
      },
      {
        səbəb: "Spray qollarının tıxanması",
        izah: "Spray qollarının tıxanması, suyun düzgün yayılmaması və nəticədə qabların yaxşı təmizlənməməsi ilə nəticələnir. Bu vəziyyət, qabyuyan maşınının effektivliyini azaldır.",
      },
      {
        səbəb: "İstilik elementlərinin nasazlığı",
        izah: "Qabyuyan maşınının istilik elementi düzgün işləmədikdə, suyun isidilməsi və təmizləmə prosesi tam olaraq həyata keçirilə bilməz. Bu, qabların yaxşı təmizlənməməsi və maşının ümumi işinin pozulmasına səbəb olur.",
      },
      {
        səbəb: "Elektron idarəetmə sistemi",
        izah: "Qabyuyan maşınlarında elektronik idarəetmə sistemi və sensorların nasazlığı, cihazın funksiyalarının düzgün işləməməsinə səbəb olur. Bu problemlər maşının proqramlarını düzgün icra etməməsi ilə nəticələnə bilər.",
      },
    ],
  },
  {
    id: "soyuducu",
    name: "Soyuducu Təmiri",
    description:
      "Soyuducuların professional təmiri. Soyutma sisteminin tam bərpası.",
    img: "/xidmet4.jpg",
    moretext: "",
    text: `Soyuducu günümüzün ən vacib məişət texnikalarından biridir və qida təhlükəsizliyinin qorunmasında əsas rol oynayır. Hər bir evdə və iş yerində əvəzsiz olan bu cihazın düzgün işləməməsi, qidaların tez xarab olmasına və sağlamlıq problemlərinə səbəb ola bilər. Bununla yanaşı, soyuducu sisteminin nasazlığı, enerji sərfiyyatını artıraraq, əlavə maliyyətlərə səbəb ola bilər. 
  
  Soliton Service şirkəti olaraq, biz soyuducuların təmirinə kompleks yanaşır və bu sahədəki təcrübəmizlə hər cür nasazlığı peşəkarcasına həll edirik. Bizim məqsədimiz yalnız cihazınızın təmirini həyata keçirmək deyil, həm də onun uzun müddət təhlükəsiz və effektiv işləməsini təmin etməkdir. Mütəxəssislərimiz soyuducunuzun hər hansı bir problemini sürətlə aşkar edir və problemi dərhal aradan qaldırır.
  
  Soyuducu təmiri, cihazın içindəki müxtəlif mexanizmlərin düzgün işləməsindən tutmuş, soyutma mayesinin (Freon) bərpasına və kondensator blokunun təmizlənməsinə qədər bir çox istiqaməti əhatə edir. Biz, həmçinin soyuducu agentin təzyiqini ölçür, elektron idarəetmə sistemini yoxlayır və cihazın düzgün çalışmasını təmin edirik. Bütün bu təmir işləri orijinal ehtiyat hissələri ilə aparılır və təmir sonrası cihazın sınaqdan keçirilməsi ilə bitir.
  
  Soyuducuların təmirinin yalnız texniki tərəfi deyil, həm də istifadəçinin qida təhlükəsizliyi və rahatlığını təmin etməsi vacibdir. Biz, hər bir müştərimizə fərdi yanaşır və onların ehtiyaclarını yüksək səviyyədə qarşılayırıq. Təmirə ehtiyac duyan soyuducuların tez bir zamanda və yüksək keyfiyyətlə təmir olunmasını təmin edirik. Soliton Service ilə təhlükəsiz və soyuq qidalar sizinlədir!`,
    serviceUrl: "soyuducu-temiri",
    kondisionerNasazliqSebeleri: [
      {
        səbəb: "Toz və kirin yığılması",
        izah: "Soyuducunun filtr və hava keçidlərində toz və kirin yığılması, havalandırma sisteminin işini zəiflədir və cihazın soyutma gücünü azaldır.",
      },
      {
        səbəb: "Soyutma mayesinin (Freon) azalması",
        izah: "Soyutma mayesi (Freon) səviyyəsinin aşağı düşməsi, soyuducunun soyutma qabiliyyətini itirməsinə və ya cihazın tamamilə işdən çıxmasına səbəb ola bilər.",
      },
      {
        səbəb: "Elektrik problemi",
        izah: "Soyuducunun elektrik bağlantılarında və ya güc mənbəyində yaranan nasazlıqlar, cihazın işini dayandıraraq, soyutma prosesini poza bilər.",
      },
      {
        səbəb: "Kompressor nasazlığı",
        izah: "Soyuducunun kompressoru, sistemin ən vacib hissəsidir. Kompressorun nasazlığı, soyuducunun düzgün işləməməsinə və enerji sərfiyyatının artmasına səbəb ola bilər.",
      },
      {
        səbəb: "Termostat və ya sensor problemi",
        izah: "Soyuducunun temperatur sensoru və ya termostatının düzgün işləməməsi, cihazın istədiyiniz temperaturu saxlamaqda çətinlik çəkməsinə səbəb ola bilər.",
      },
    ],
  },
  {
    id: "televizor",
    name: "Televizor Təmiri",
    serviceUrl: "tv-temiri",
    description:
      "Televizorların professional təmiri. Şəkil və səs keyfiyyətinin bərpası.",
    img: "/xidmet5.jpg",
    moretext: "",
    text: `Televizorlar müasir əyləncə və informasiya mənbəyidir və hər bir evin vacib texniki avadanlıqlarından biridir. Keyfiyyətli görüntü və səs təcrübəsi hər bir izləyici üçün mükəmməl təcrübə yaradır. Lakin, televizorların müxtəlif texniki nasazlıqları görüntü və ya səs keyfiyyətinin aşağı düşməsinə səbəb ola bilər. Soliton Service şirkəti olaraq, biz televizorların təmirinə kompleks və professional yanaşır, bütün növ nasazlıqları sürətlə aradan qaldırırıq.
  
  Televizorların təmiri çoxsaylı mərhələləri əhatə edir və biz bunun üçün ən müasir avadanlıqlardan istifadə edirik. Ekran panelinin təmirindən, səs sistemlərinin tənzimlənməsinə, həmçinin elektron blokların bərpasına qədər geniş bir spektri əhatə edirik. Həmçinin, HDMI portlarının yoxlanması, Smart TV sisteminin proqram təminatının yenilənməsi və digər vacib texniki aspektləri də daxil edirik.
  
  Bizim mütəxəssislərimiz yüksək ixtisaslıdır və müasir diaqnostika avadanlıqları ilə televizorunuzu ən yüksək keyfiyyətlə təmir edirlər. Təmir işləri yalnız orijinal ehtiyat hissələri ilə aparılır və hər bir təmir sonrasında cihaz sınaqdan keçirilərək müştərilərə təhvil verilir. Təmirə ehtiyac olan televizorlarınızın keyfiyyətli şəkil və səs funksiyalarını bərpa edirik, beləliklə hər bir izləyici təcrübəsi daha yüksək səviyyəyə yüksəlir.
  
  Televizor təmiri yalnız texniki məsələlərlə əlaqəli deyil, həm də sizin əyləncə və informasiya məkanınızın keyfiyyətinin bərpasıdır. Biz hər bir müştərimizə fərdi yanaşır, onların ehtiyaclarını ən yüksək səviyyədə qarşılayırıq. Soliton Service ilə yüksək keyfiyyətli görüntü və səs təcrübəsi sizinlədir!`,
    kondisionerNasazliqSebeleri: [
      {
        səbəb: "Toz və kirin yığılması",
        izah: "Televizorun daxili komponentlərində toz və kirin yığılması, ekranın keyfiyyətini azaldaraq görüntü və səsin zəifləməsinə səbəb ola bilər.",
      },
      {
        səbəb: "Elektrik problemi",
        izah: "Televizorun elektrik bağlantılarında yaranan nasazlıqlar, ekranın sönməsinə və ya cihazın ümumiyyətlə işləməməsinə səbəb ola bilər.",
      },
      {
        səbəb: "Ekran panelinin zədələnməsi",
        izah: "Televizorun ekran panelində yaranan zədələnmələr, görüntü keyfiyyətini ciddi şəkildə poza bilər, bununla yanaşı ekranda sızmalar və ya parıltılar meydana gələ bilər.",
      },
      {
        səbəb: "Səs sistemi nasazlığı",
        izah: "Televizorun səs sistemində yaranan problemlər, səsin keyfiyyətinin pisləşməsinə və ya ümumiyyətlə səsin olmamasına səbəb ola bilər.",
      },
      {
        səbəb: "Smart TV proqram təminatı problemi",
        izah: "Televizorun Smart TV funksiyaları, proqram təminatının köhnəlməsi və ya nasazlığı nəticəsində düzgün işləməyə bilər, tətbiqlər və ya internet bağlantısı ilə bağlı problemlər yarana bilər.",
      },
    ],
  },
  {
    id: "elektrik-sobasi",
    name: "Elektrik Sobası",
    img: "/xidmet6.jpg",
    serviceUrl: "elektriksobasi-temiri",
    description:
      "Elektrik sobalarının təmiri və baxımı. Sobaların istənilən növ nasazlıqlarının aradan qaldırılması.",
    text: `Elektrik sobaları müasir mətbəxlərin ən vacib avadanlıqlarından biridir və qida hazırlama prosesində böyük rol oynayır. Onların düzgün və etibarlı işləməsi, mətbəx təsərrüfatının səmərəliliyini və təhlükəsizliyini birbaşa təmin edir. Lakin, elektrik sobasının nasazlıq verməsi mətbəx işlərində ciddi problemlər yarada bilər. Soliton Service şirkəti olaraq, biz elektrik sobalarının təmirinə kompleks və professional yanaşır, hər növ nasazlığı sürətlə və effektiv şəkildə aradan qaldırırıq.
  
  Elektrik sobalarının təmiri bir neçə əsas mərhələdən ibarətdir. Biz müştərilərimizə yüksək keyfiyyətli xidmət göstərir, istənilən nasazlıq və problemləri müasir texnologiyalar və mütəxəssis bilikləri ilə həll edirik. Bizim təcrübəli mütəxəssislərimiz, sobanın istilik elementlərinin diaqnostikasını aparır, elektrik sistemini yoxlayır və nəzarət panelindəki problemləri həll edirlər. Bütün bu proseslər nəticəsində soba əvvəlki kimi səmərəli işləyəcək və mətbəx işlərinizi asanlaşdıracaq.
  
  Bizim xidmətlərimizə aşağıdakılar daxildir:
  
  - **Diaqnostika Mərhələsi**: Sobanın tam texniki vəziyyətinin yoxlanması, istilik elementlərinin, elektrik sisteminin və nəzarət panelinin test edilməsi.
  - **Əsas Təmir İstiqamətləri**: İstilik elementlərinin təmiri və ya dəyişdirilməsi, elektrik sisteminin bərpası, termo tənzimləyicilərin kalibrlənməsi və nəzarət panelinin proqram təminatının yenilənməsi.
  - **Keyfiyyət Təminatı**: Təmir sonrası sınaq rejimi, orijinal ehtiyat hissələri ilə təmir və müştərilərimizə tam zəmanət xidməti.
  
  Bizim üstünlüyümüz, elektrik sobalarının təmiri ilə bağlı geniş təcrübəyə malik olmamız və təhlükəsizlik standartlarına tam riayət etməyimizdir. Hər bir müştəriyə fərdi yanaşır və onların ehtiyaclarına uyğun xidmət göstəririk.
  
  Elektrik sobası yalnız bir mətbəx avadanlığı deyil, həm də sizin gündəlik həyatda ən çox istifadə etdiyiniz cihazlardandır. Bizimlə təhlükəsiz və səmərəli qida hazırlama prosesini təmin edin!`,
    moretext: "",
    kondisionerNasazliqSebeleri: [
      {
        səbəb: "Toz və kirin yığılması",
        izah: "Elektrik sobalarının istilik elementlərində toz və kirin yığılması, cihazın istilik gücünü azaldır və uzunmüddətli işləmə nəticəsində təhlükə yarada bilər.",
      },
      {
        səbəb: "Elektrik problemi",
        izah: "Sobanın elektrik bağlantılarında və ya güc mənbəyində yaranan nasazlıqlar, cihazın işini dayandıra bilər və ya normal işləməməsinə səbəb ola bilər.",
      },
      {
        səbəb: "İstilik elementlərinin zədələnməsi",
        izah: "Sobanın istilik elementlərinin zədələnməsi və ya xarab olması, qida hazırlama prosesini dayandıra bilər və sobanın istifadəsini qeyri-mümkün edə bilər.",
      },
      {
        səbəb: "Termostat problemi",
        izah: "Termostatın nasazlığı, sobaların düzgün temperaturda işləməməsinə və qida hazırlama prosesinin pozulmasına səbəb ola bilər.",
      },
      {
        səbəb: "Nəzarət paneli nasazlığı",
        izah: "Elektrik sobasının nəzarət panelindəki nasazlıqlar, cihazın düzgün işləməməsinə və istifadəçinin sobanı istədiyi şəkildə idarə edə bilməməsinə yol aça bilər.",
      },
    ],
  },
  {
    id: "qaz-sobasi",
    name: "Qaz Sobası",
    img: "/xidmet7.jpg",
    serviceUrl: "qazsobasi-temiri",
    description: "Qaz sobalarının professional təmiri.",
    text: "Qaz sobaları mətbəxlərdə ən vacib və eyni zamanda ən həssas texniki avadanlıqlardandır. Onların düzgün işləməməsi yalnız qida hazırlama prosesini çətinləşdirmək deyil, həm də ciddi təhlükə yarada bilər. Təhlükəsiz və səmərəli işləməsi üçün qaz sobasına daimi qulluq və mütəxəssis tərəfindən müntəzəm yoxlama tələb olunur. Soliton Service şirkəti olaraq, biz qaz sobalarının təmirinə yüksək ixtisaslı və təcrübəli mütəxəssislərimizlə yanaşırıq. Bizim xidmətlərimiz, qaz sobalarının texniki vəziyyətini diqqətlə yoxlamaq, hər hansı bir nasazlığı müəyyən etmək və orijinal ehtiyat hissələri ilə təmir etməkdən ibarətdir. Təmir işləri zamanı sobanın yanma sistemi, qaz klapanları, ventilyasiya və təhlükəsizlik sistemləri ətraflı şəkildə yoxlanılır və hər hansı bir problem təmir edilir. Bizim əsas məqsədimiz, müştərilərimizin evində qaz sobasının təhlükəsiz və effektiv şəkildə işləməsini təmin etməkdir. Soliton Service ilə qaz sobasının təmiri, yalnız texniki problemlərin həlli deyil, həm də evinizin təhlükəsizliyinin təminatıdır.",
    moretext: "",
    kondisionerNasazliqSebeleri: [
      {
        səbəb: "Qaz sızması",
        izah: "Qaz sobasında qaz sızması ciddi təhlükə yaradır və dərhal peşəkar təmir tələb edir. Sızan qaz tənəffüs yolu ilə daxil ola bilər və yanğın və ya partlayışa səbəb ola bilər.",
      },
      {
        səbəb: "Yanma sistemi nasazlığı",
        izah: "Qaz sobasında yanma sistemi nasaz olduqda, soba düzgün və təhlükəsiz yanma əməliyyatı apara bilməz. Bu, həm sobanın funksionallığını, həm də təhlükəsizliyi təsir edir.",
      },
      {
        səbəb: "Qaz klapanlarının tənzimlənməsi",
        izah: "Qaz klapanlarının düzgün tənzimlənməməsi, sobanın yanma gücünü düzgün nizamlamaz, həmçinin qazın təhlükəsiz şəkildə sobaya daxil olmasına mane ola bilər.",
      },
      {
        səbəb: "Ventilyasiya sisteminin problemi",
        izah: "Qaz sobalarının düzgün işləməsi üçün ventilyasiya sisteminin effektiv olması vacibdir. Hava axınının kəsilməsi və ya nasazlığı sobanın işləməməsinə səbəb ola bilər.",
      },
      {
        səbəb: "İnjektorların tıxanması",
        izah: "Qaz sobasında injektorlar yanma üçün vacibdir. İnjektorların tıxanması, sobanın düzgün yanmağını və istilik təminatını təmin etməyə bilər.",
      },
    ],
  },
];
const ServicesPage = () => {
  const [selectedService, setSelectedService] =
    useState<ApplianceService | null>(applianceServices[0]);
  const router = useRouter();
  const pathname = usePathname();

  const changeService = (service: ApplianceService) => {
    router.push(`/xidmetler/${service.serviceUrl}`);
    setSelectedService(service);
  };

  useEffect(() => {
    const pathArray = pathname.split("/");
    const key = applianceServices.find(
      (s: ApplianceService) => s.serviceUrl === pathArray[2]
    );

    if (key) {
      setSelectedService(key);
    }
  }, [pathname]);

  return (
    <div className="services-page">
      <header className="page-header">
        <div className="breadcrumb-container">
          <h1 className="banner-title">
            {" "}
            {selectedService?.name || "Məişət Texnikalarının Təmiri"}
          </h1>
          <div className="breadcrumb-navigation">
            <Link href="/" className="breadcrumb-home-link">
              Əsas Səhifə
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current-page">
              {selectedService?.name || "Məişət Texnikalarının Təmiri"}
            </span>
          </div>
        </div>
      </header>

      <main className="page-main-content">
        <div className="services-sidebar">
          {applianceServices.map((service) => (
            <button
              key={service.id}
              onClick={() => changeService(service)}
              className={`service-selector ${
                selectedService?.id === service.id
                  ? "service-selector-active"
                  : ""
              }`}
            >
              <span className="service-selector-name">{service.name}</span>
            </button>
          ))}
        </div>

        {selectedService && (
          <div className="services-details-container">
            <img src={selectedService.img} alt="xidmet" />
            <p className="text">{selectedService.text}</p>
            <h3> Nasazlıq Səbəbləri</h3>
            <ul className="reasons">
              {selectedService.kondisionerNasazliqSebeleri.map(
                (item, index) => (
                  <li key={index}>
                    <strong>{item.səbəb}:</strong> {item.izah}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default ServicesPage;
