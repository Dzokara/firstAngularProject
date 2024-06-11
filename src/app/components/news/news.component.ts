import { Component,Input } from '@angular/core';
import { News } from '../../class/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  @Input() news!: News;
}
