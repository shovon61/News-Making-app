import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news/service/news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss'],
})
export class AllNewsComponent implements OnInit {
  news!: any[];
  constructor(private newsSer: NewsService) {}

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.newsSer.getNews().subscribe({
      next: (res) => {
        this.news = res;
        console.log('All news', this.news);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
