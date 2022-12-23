import { Injectable } from '@nestjs/common';
import { News } from 'src/models/news';
import { CreateNewsRequest } from 'src/models/newsRequest';
let news: News[] = [
  {
    id: 1,
    header: 'Türkiyədən trençkot sifarişi',
    date: '10.10.2022',
    imageSrc:
      'https://glob.az/frontend/web/uploads//images/Trenchcoat-BLOG.jpg',
    page: 'trench-coat',
  },
  {
    id: 2,
    header: 'Türkiyədən uşaq geyimlərinin sifarişi',
    date: '10.10.2022',
    imageSrc:
      'https://glob.az/frontend/web/uploads//images/Usaq-geyimlerinin-sifarisiBLOG.jpg',
    page: 'ushaq-geyimleri',
  },
  {
    id: 3,
    header: 'Trendyoldan idman geyimlərinin sifarişi',
    date: '22.09.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/b2.jpg',
    page: 'idman-geyimleri',
  },
  {
    id: 4,
    header: 'Türkiyədən paltar sifarişi',
    date: '25.08.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/b3-1.jpg',
    page: 'paltar-sifarishi',
  },
  {
    id: 5,
    header: 'Türkiyədən Azərbaycana onlayn alış-veriş',
    date: '22.08.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/b1-1.jpg',
    page: 'online-alishverish',
  },
  {
    id: 6,
    header: 'FIRILDAQÇILIQ HALLARININ QARŞISINI ALMAQ ÜÇÜN',
    date: '24.01.2022',
    imageSrc: 'https://glob.az/frontend/web/uploads//images/Untitled-3.png',
    page: 'firildaqchiliq',
  },
  {
    id: 7,
    header: 'TÜRKİYƏDƏN AZƏRBAYCANA AYAQQABI SİFARİŞİ',
    date: '25.08.2022',
    imageSrc:
      'https://glob.az/frontend/web/uploads//images/Blog-Slide-01-1.jpg',
    page: 'ayaqqabi-sifarishi',
  },
];

@Injectable()
export class NewsService {
  getNews(): News[] {
    return news;
  }

  getNewsById(id: number): News {
    return news.find((news) => news.id === id);
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
  updateNews(id: number, request: CreateNewsRequest) {
    const newsToChange = this.getNewsById(id);
    newsToChange.header = request.header;
    newsToChange.imageSrc = request.imageSrc;
    newsToChange.date = request.date;
    newsToChange.page = request.page;
  }
  deleteNews(id: number) {
    news = news.filter((n) => n.id !== id);
  }
}
