import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../news/service/news.service';

@Component({
  selector: 'app-delete-news',
  templateUrl: './delete-news.component.html',
  styleUrls: ['./delete-news.component.scss'],
})
export class DeleteNewsComponent implements OnInit {
  newsId!: any;
  delateFormGroup!: FormGroup;
  newsDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.newsId = param.get('id');
      this.newsService.getNewsById(this.newsId).subscribe((res) => {
        this.newsDetails = res;
        this.initFormGroup();
        console.log('news by id', this.newsDetails);
      });
    });
    this.initFormGroup();
  }
  initFormGroup() {
    this.delateFormGroup = this.formBuilder.group({
      Headline: [this.newsDetails ? this.newsDetails.Headline : '', Validators.required],
      SortDescription: [this.newsDetails ? this.newsDetails.SortDescription : '', Validators.required],
      LongDescription: [this.newsDetails ? this.newsDetails.LongDescription : '', Validators.required],
      PostedBy: [this.newsDetails ? this.newsDetails.PostedBy : [2], Validators.required],
    });
  }

  deleteForm() {
    this.newsService
      .deleteNewsFn(this.newsId, this.delateFormGroup.value)
      .subscribe((res) => console.log('delete', res));
  }
}
