import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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
  getNew(@Param('id') id: string): News {
    console.log(`GET news with id ${id}`);
    return this.newsService.getNewsById(+id);
  }

  @Post()
  createNews(@Body() request: CreateNewsRequest): number {
    return this.newsService.createNews(request);
  }
  @Put(':id')
  updateNews(@Param('id') id: string, @Body() request: CreateNewsRequest) {
    this.newsService.updateNews(+id, request);
  }
  @Delete(':id')
  deleteNews(@Param('id') id: string) {
    this.newsService.deleteNews(+id);
  }
}
