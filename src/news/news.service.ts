import { Injectable } from '@nestjs/common';
import { News } from 'src/models/news';
import { CreateNewsRequest } from 'src/models/newsRequest';
const news: News[] = [
  {
    id: 1,
    header: 'Türkiyədən trençkot sifarişi',
    date: '10.10.2022',
    imageSrc:
      'https://glob.az/frontend/web/uploads//images/Trenchcoat-BLOG.jpg',
    page: {
      title: 'TÜRKİYƏDƏN TRENÇKOT SİFARİŞİ',
      text: `Zövqlü və zərif görünməyin ən asan yollarından biri də trençkot modelləri ilə kombin etməkdir.
      Trençkotlar uzun müddətdir ki, dəbdən düşməyən üst geyimlərindəndir. Bu səbəbdən də zövq sahibi
      insanlar payız və yaz fəsillərində trençkotlara üstünlük verməkdədir. <br />
      Bildiyiniz kimi trençkot modelləri daha çox suyadavamlı parçalardan hazırlanır. Bu səbəblə yağışlı
      və sərin havalarda palto növləri yerinə, daha yüngül və nazik quruluşa malik olan trençkotlara
      üstünlük verilə bilər. Həmçinin, trençkotlar rahatlıqla sport və klassik üslubda kombinlənə bilir.
      Bu da geyimdə zövqsüzlük riskini azaldır və vaxta qənaəti təmin edir. Bütün bu xüsusiyyətlər bir
      araya gəldikdə, trençkotların niyə bu qədər məşhur olduğunu və istifadə edildiyini daha aydın başa
      düşmək mümkündür.
      <pre> </pre>
      <b>Bəs zövqümüzə uyğun trençkotları haradan əldə edək?</b>
      <pre> </pre>
      Türkiyənin onlayn alış-veriş saytlarından <b>Stradivarius, Mango, Bershka, Zara</b> kimi brendlərə
      məxsus trençkotların sifarişi mümkündür. Hər rəngdə keyfiyyətli trençkotları bu markalardan
      Glob.az vasitəsilə sifariş edə bilərsiniz.
      <pre> </pre>
      <b>Sürətli və sərfəli karqo - Glob.az!</b>
      <pre> </pre>
      Glob.az - yarandığı gündən etibarən ölkənin ən sürətli fəaliyyət göstərən və ən çox müştəri
      məmnuniyyətinə sahib karqo şirkətidir. Hər zaman müştərilərinin məmnuniyyətini, büdcəsini və
      vaxtını düşünən Glob.az karqo şirkəti, müxtəlif imkanları ilə fərqliliklər yaratmışdır.
      <Link to="/tarifler"> 0.70 USD</Link>-dən başlayan tarifləri Türkiyədən edilən sifarişləri sərfəli
      edir. İstər vebsayt, istərsə də mobil tətbiq vasitəsilə sifarişlərinizi etibarlı şəkildə həyata
      keçirə bilərsiniz. <br />
      Siz də payızın gəlişini Glob.az ilə hiss edin! Qeyd etdiyimiz trençkotların Türkiyənin onlayn
      alış-veriş saytlarından sifarişini Glob.az vasitəsilə edərək, vaxtınıza və büdcənizə qənaət edin.
      <br />
      Elə isə, vaxt itirmədən <b> Glob.az</b> saytından <Link to="/sign-up"> qeydiyyatdan keçərək</Link>{' '}
      , Türkiyədən onlayn alış-verişin dadını çıxarın!`,
    },
  },
  {
    id: 2,
    header: 'Türkiyədən uşaq geyimlərinin sifarişi',
    date: '10.10.2022',
    imageSrc:
      'https://glob.az/frontend/web/uploads//images/Usaq-geyimlerinin-sifarisiBLOG.jpg',
    page: {
      title: 'TÜRKİYƏDƏN TRENÇKOT SİFARİŞİ',
      text: `Zövqlü və zərif görünməyin ən asan yollarından biri də trençkot modelləri ilə kombin etməkdir.
      Trençkotlar uzun müddətdir ki, dəbdən düşməyən üst geyimlərindəndir. Bu səbəbdən də zövq sahibi
      insanlar payız və yaz fəsillərində trençkotlara üstünlük verməkdədir. <br />
      Bildiyiniz kimi trençkot modelləri daha çox suyadavamlı parçalardan hazırlanır. Bu səbəblə yağışlı
      və sərin havalarda palto növləri yerinə, daha yüngül və nazik quruluşa malik olan trençkotlara
      üstünlük verilə bilər. Həmçinin, trençkotlar rahatlıqla sport və klassik üslubda kombinlənə bilir.
      Bu da geyimdə zövqsüzlük riskini azaldır və vaxta qənaəti təmin edir. Bütün bu xüsusiyyətlər bir
      araya gəldikdə, trençkotların niyə bu qədər məşhur olduğunu və istifadə edildiyini daha aydın başa
      düşmək mümkündür.
      <pre> </pre>
      <b>Bəs zövqümüzə uyğun trençkotları haradan əldə edək?</b>
      <pre> </pre>
      Türkiyənin onlayn alış-veriş saytlarından <b>Stradivarius, Mango, Bershka, Zara</b> kimi brendlərə
      məxsus trençkotların sifarişi mümkündür. Hər rəngdə keyfiyyətli trençkotları bu markalardan
      Glob.az vasitəsilə sifariş edə bilərsiniz.
      <pre> </pre>
      <b>Sürətli və sərfəli karqo - Glob.az!</b>
      <pre> </pre>
      Glob.az - yarandığı gündən etibarən ölkənin ən sürətli fəaliyyət göstərən və ən çox müştəri
      məmnuniyyətinə sahib karqo şirkətidir. Hər zaman müştərilərinin məmnuniyyətini, büdcəsini və
      vaxtını düşünən Glob.az karqo şirkəti, müxtəlif imkanları ilə fərqliliklər yaratmışdır.
      <Link to="/tarifler"> 0.70 USD</Link>-dən başlayan tarifləri Türkiyədən edilən sifarişləri sərfəli
      edir. İstər vebsayt, istərsə də mobil tətbiq vasitəsilə sifarişlərinizi etibarlı şəkildə həyata
      keçirə bilərsiniz. <br />
      Siz də payızın gəlişini Glob.az ilə hiss edin! Qeyd etdiyimiz trençkotların Türkiyənin onlayn
      alış-veriş saytlarından sifarişini Glob.az vasitəsilə edərək, vaxtınıza və büdcənizə qənaət edin.
      <br />
      Elə isə, vaxt itirmədən <b> Glob.az</b> saytından <Link to="/sign-up"> qeydiyyatdan keçərək</Link>{' '}
      , Türkiyədən onlayn alış-verişin dadını çıxarın!`,
    },
  },
  {
    id: 3,
    header: 'Trendyoldan idman geyimlərinin sifarişi',
    date: '22.09.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/b2.jpgy',
    page: {
      title: 'TÜRKİYƏDƏN TRENÇKOT SİFARİŞİ',
      text: `Zövqlü və zərif görünməyin ən asan yollarından biri də trençkot modelləri ilə kombin etməkdir.
      Trençkotlar uzun müddətdir ki, dəbdən düşməyən üst geyimlərindəndir. Bu səbəbdən də zövq sahibi
      insanlar payız və yaz fəsillərində trençkotlara üstünlük verməkdədir. <br />
      Bildiyiniz kimi trençkot modelləri daha çox suyadavamlı parçalardan hazırlanır. Bu səbəblə yağışlı
      və sərin havalarda palto növləri yerinə, daha yüngül və nazik quruluşa malik olan trençkotlara
      üstünlük verilə bilər. Həmçinin, trençkotlar rahatlıqla sport və klassik üslubda kombinlənə bilir.
      Bu da geyimdə zövqsüzlük riskini azaldır və vaxta qənaəti təmin edir. Bütün bu xüsusiyyətlər bir
      araya gəldikdə, trençkotların niyə bu qədər məşhur olduğunu və istifadə edildiyini daha aydın başa
      düşmək mümkündür.
      <pre> </pre>
      <b>Bəs zövqümüzə uyğun trençkotları haradan əldə edək?</b>
      <pre> </pre>
      Türkiyənin onlayn alış-veriş saytlarından <b>Stradivarius, Mango, Bershka, Zara</b> kimi brendlərə
      məxsus trençkotların sifarişi mümkündür. Hər rəngdə keyfiyyətli trençkotları bu markalardan
      Glob.az vasitəsilə sifariş edə bilərsiniz.
      <pre> </pre>
      <b>Sürətli və sərfəli karqo - Glob.az!</b>
      <pre> </pre>
      Glob.az - yarandığı gündən etibarən ölkənin ən sürətli fəaliyyət göstərən və ən çox müştəri
      məmnuniyyətinə sahib karqo şirkətidir. Hər zaman müştərilərinin məmnuniyyətini, büdcəsini və
      vaxtını düşünən Glob.az karqo şirkəti, müxtəlif imkanları ilə fərqliliklər yaratmışdır.
      <Link to="/tarifler"> 0.70 USD</Link>-dən başlayan tarifləri Türkiyədən edilən sifarişləri sərfəli
      edir. İstər vebsayt, istərsə də mobil tətbiq vasitəsilə sifarişlərinizi etibarlı şəkildə həyata
      keçirə bilərsiniz. <br />
      Siz də payızın gəlişini Glob.az ilə hiss edin! Qeyd etdiyimiz trençkotların Türkiyənin onlayn
      alış-veriş saytlarından sifarişini Glob.az vasitəsilə edərək, vaxtınıza və büdcənizə qənaət edin.
      <br />
      Elə isə, vaxt itirmədən <b> Glob.az</b> saytından <Link to="/sign-up"> qeydiyyatdan keçərək</Link>{' '}
      , Türkiyədən onlayn alış-verişin dadını çıxarın!`,
    },
  },
  {
    id: 4,
    header: 'Türkiyədən paltar sifarişi',
    date: '25.08.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/b3-1.jpg',
    page: {
      title: 'TÜRKİYƏDƏN TRENÇKOT SİFARİŞİ',
      text: `Zövqlü və zərif görünməyin ən asan yollarından biri də trençkot modelləri ilə kombin etməkdir.
      Trençkotlar uzun müddətdir ki, dəbdən düşməyən üst geyimlərindəndir. Bu səbəbdən də zövq sahibi
      insanlar payız və yaz fəsillərində trençkotlara üstünlük verməkdədir. <br />
      Bildiyiniz kimi trençkot modelləri daha çox suyadavamlı parçalardan hazırlanır. Bu səbəblə yağışlı
      və sərin havalarda palto növləri yerinə, daha yüngül və nazik quruluşa malik olan trençkotlara
      üstünlük verilə bilər. Həmçinin, trençkotlar rahatlıqla sport və klassik üslubda kombinlənə bilir.
      Bu da geyimdə zövqsüzlük riskini azaldır və vaxta qənaəti təmin edir. Bütün bu xüsusiyyətlər bir
      araya gəldikdə, trençkotların niyə bu qədər məşhur olduğunu və istifadə edildiyini daha aydın başa
      düşmək mümkündür.
      <pre> </pre>
      <b>Bəs zövqümüzə uyğun trençkotları haradan əldə edək?</b>
      <pre> </pre>
      Türkiyənin onlayn alış-veriş saytlarından <b>Stradivarius, Mango, Bershka, Zara</b> kimi brendlərə
      məxsus trençkotların sifarişi mümkündür. Hər rəngdə keyfiyyətli trençkotları bu markalardan
      Glob.az vasitəsilə sifariş edə bilərsiniz.
      <pre> </pre>
      <b>Sürətli və sərfəli karqo - Glob.az!</b>
      <pre> </pre>
      Glob.az - yarandığı gündən etibarən ölkənin ən sürətli fəaliyyət göstərən və ən çox müştəri
      məmnuniyyətinə sahib karqo şirkətidir. Hər zaman müştərilərinin məmnuniyyətini, büdcəsini və
      vaxtını düşünən Glob.az karqo şirkəti, müxtəlif imkanları ilə fərqliliklər yaratmışdır.
      <Link to="/tarifler"> 0.70 USD</Link>-dən başlayan tarifləri Türkiyədən edilən sifarişləri sərfəli
      edir. İstər vebsayt, istərsə də mobil tətbiq vasitəsilə sifarişlərinizi etibarlı şəkildə həyata
      keçirə bilərsiniz. <br />
      Siz də payızın gəlişini Glob.az ilə hiss edin! Qeyd etdiyimiz trençkotların Türkiyənin onlayn
      alış-veriş saytlarından sifarişini Glob.az vasitəsilə edərək, vaxtınıza və büdcənizə qənaət edin.
      <br />
      Elə isə, vaxt itirmədən <b> Glob.az</b> saytından <Link to="/sign-up"> qeydiyyatdan keçərək</Link>{' '}
      , Türkiyədən onlayn alış-verişin dadını çıxarın!`,
    },
  },
  {
    id: 5,
    header: 'Türkiyədən Azərbaycana onlayn alış-veriş',
    date: '22.08.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/b1-1.jpg',
    page: {
      title: 'TÜRKİYƏDƏN TRENÇKOT SİFARİŞİ',
      text: `Zövqlü və zərif görünməyin ən asan yollarından biri də trençkot modelləri ilə kombin etməkdir.
      Trençkotlar uzun müddətdir ki, dəbdən düşməyən üst geyimlərindəndir. Bu səbəbdən də zövq sahibi
      insanlar payız və yaz fəsillərində trençkotlara üstünlük verməkdədir. <br />
      Bildiyiniz kimi trençkot modelləri daha çox suyadavamlı parçalardan hazırlanır. Bu səbəblə yağışlı
      və sərin havalarda palto növləri yerinə, daha yüngül və nazik quruluşa malik olan trençkotlara
      üstünlük verilə bilər. Həmçinin, trençkotlar rahatlıqla sport və klassik üslubda kombinlənə bilir.
      Bu da geyimdə zövqsüzlük riskini azaldır və vaxta qənaəti təmin edir. Bütün bu xüsusiyyətlər bir
      araya gəldikdə, trençkotların niyə bu qədər məşhur olduğunu və istifadə edildiyini daha aydın başa
      düşmək mümkündür.
      <pre> </pre>
      <b>Bəs zövqümüzə uyğun trençkotları haradan əldə edək?</b>
      <pre> </pre>
      Türkiyənin onlayn alış-veriş saytlarından <b>Stradivarius, Mango, Bershka, Zara</b> kimi brendlərə
      məxsus trençkotların sifarişi mümkündür. Hər rəngdə keyfiyyətli trençkotları bu markalardan
      Glob.az vasitəsilə sifariş edə bilərsiniz.
      <pre> </pre>
      <b>Sürətli və sərfəli karqo - Glob.az!</b>
      <pre> </pre>
      Glob.az - yarandığı gündən etibarən ölkənin ən sürətli fəaliyyət göstərən və ən çox müştəri
      məmnuniyyətinə sahib karqo şirkətidir. Hər zaman müştərilərinin məmnuniyyətini, büdcəsini və
      vaxtını düşünən Glob.az karqo şirkəti, müxtəlif imkanları ilə fərqliliklər yaratmışdır.
      <Link to="/tarifler"> 0.70 USD</Link>-dən başlayan tarifləri Türkiyədən edilən sifarişləri sərfəli
      edir. İstər vebsayt, istərsə də mobil tətbiq vasitəsilə sifarişlərinizi etibarlı şəkildə həyata
      keçirə bilərsiniz. <br />
      Siz də payızın gəlişini Glob.az ilə hiss edin! Qeyd etdiyimiz trençkotların Türkiyənin onlayn
      alış-veriş saytlarından sifarişini Glob.az vasitəsilə edərək, vaxtınıza və büdcənizə qənaət edin.
      <br />
      Elə isə, vaxt itirmədən <b> Glob.az</b> saytından <Link to="/sign-up"> qeydiyyatdan keçərək</Link>{' '}
      , Türkiyədən onlayn alış-verişin dadını çıxarın!`,
    },
  },
  {
    id: 6,
    header: 'FIRILDAQÇILIQ HALLARININ QARŞISINI ALMAQ ÜÇÜN',
    date: '24.01.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/Untitled-3.png',
    page: {
      title: 'TÜRKİYƏDƏN TRENÇKOT SİFARİŞİ',
      text: `Zövqlü və zərif görünməyin ən asan yollarından biri də trençkot modelləri ilə kombin etməkdir.
      Trençkotlar uzun müddətdir ki, dəbdən düşməyən üst geyimlərindəndir. Bu səbəbdən də zövq sahibi
      insanlar payız və yaz fəsillərində trençkotlara üstünlük verməkdədir. <br />
      Bildiyiniz kimi trençkot modelləri daha çox suyadavamlı parçalardan hazırlanır. Bu səbəblə yağışlı
      və sərin havalarda palto növləri yerinə, daha yüngül və nazik quruluşa malik olan trençkotlara
      üstünlük verilə bilər. Həmçinin, trençkotlar rahatlıqla sport və klassik üslubda kombinlənə bilir.
      Bu da geyimdə zövqsüzlük riskini azaldır və vaxta qənaəti təmin edir. Bütün bu xüsusiyyətlər bir
      araya gəldikdə, trençkotların niyə bu qədər məşhur olduğunu və istifadə edildiyini daha aydın başa
      düşmək mümkündür.
      <pre> </pre>
      <b>Bəs zövqümüzə uyğun trençkotları haradan əldə edək?</b>
      <pre> </pre>
      Türkiyənin onlayn alış-veriş saytlarından <b>Stradivarius, Mango, Bershka, Zara</b> kimi brendlərə
      məxsus trençkotların sifarişi mümkündür. Hər rəngdə keyfiyyətli trençkotları bu markalardan
      Glob.az vasitəsilə sifariş edə bilərsiniz.
      <pre> </pre>
      <b>Sürətli və sərfəli karqo - Glob.az!</b>
      <pre> </pre>
      Glob.az - yarandığı gündən etibarən ölkənin ən sürətli fəaliyyət göstərən və ən çox müştəri
      məmnuniyyətinə sahib karqo şirkətidir. Hər zaman müştərilərinin məmnuniyyətini, büdcəsini və
      vaxtını düşünən Glob.az karqo şirkəti, müxtəlif imkanları ilə fərqliliklər yaratmışdır.
      <Link to="/tarifler"> 0.70 USD</Link>-dən başlayan tarifləri Türkiyədən edilən sifarişləri sərfəli
      edir. İstər vebsayt, istərsə də mobil tətbiq vasitəsilə sifarişlərinizi etibarlı şəkildə həyata
      keçirə bilərsiniz. <br />
      Siz də payızın gəlişini Glob.az ilə hiss edin! Qeyd etdiyimiz trençkotların Türkiyənin onlayn
      alış-veriş saytlarından sifarişini Glob.az vasitəsilə edərək, vaxtınıza və büdcənizə qənaət edin.
      <br />
      Elə isə, vaxt itirmədən <b> Glob.az</b> saytından <Link to="/sign-up"> qeydiyyatdan keçərək</Link>{' '}
      , Türkiyədən onlayn alış-verişin dadını çıxarın!`,
    },
  },
];

@Injectable()
export class NewsService {
  getNews(): News[] {
    return news;
  }
  getNewsById(id: number): News {
    console.log(id);
    console.log(news);
    return news.find((news) => news.id == id);
  }
  createNews(request: CreateNewsRequest): number {
    const newId = news[news.length - 1].id + 1;
    const newNews: News = {
      id: newId + 1,
      header: request.header,
      date: request.date,
      imageSrc: request.imageSrc,
      page: request.page,
    };
    news.push(newNews);
    return newId;
  }
}
