import { Component } from '@angular/core';
import { NewsService } from '../../news/business-logic/api/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../class/news.model';
@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.css'
})
export class BlogSingleComponent {
    news!: News;
  
    constructor(private newsService: NewsService, private route: ActivatedRoute){}
  
    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        const id = parseInt(this.route.snapshot.params['id']);
        if (id) {
          this.newsService.getSingleNews(id).subscribe(news => {
            this.news = news;
          });
        }
      });
    }
  
}
