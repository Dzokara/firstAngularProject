import { Component } from '@angular/core';
import { NewsService } from '../../news/business-logic/api/news.service';
import { News } from '../../class/news.model';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  news: News[] = [];

  constructor(private newsService: NewsService){}

  ngOnInit():void{
    this.newsService.getAllNews().subscribe(data2=>{
      this.news=data2;
    })
  }
}
