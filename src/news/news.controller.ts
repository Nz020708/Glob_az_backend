import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { News } from 'src/models/news';
import { CreateNewsRequest } from 'src/models/newsRequest';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  @Get()
  getNews(): News[] {
    console.log(`GET news`);
    return this.newsService.getNews();
  }

  @Get(':id')
  getNewsById(@Param('id') id: string) {
    console.log(`GET news with id ${id}`);
    return this.newsService.getNewsById(+id);
  }
  @Post()
  createNews(@Body() request: CreateNewsRequest): number {
    return this.newsService.createNews(request);
  }
}
