import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news/service/news.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
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
