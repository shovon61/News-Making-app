import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../news/service/news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss'],
})
export class UpdateNewsComponent implements OnInit {
  newscreateUpdate!: FormGroup;
  NewsDetails!: any;
  NewsId!: any;
  constructor(
    private mewsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.NewsId = param.get('id');
      this.mewsService.getNewsById(this.NewsId).subscribe((res) => {
        this.NewsDetails = res;
        this.initFormGroup();
        console.log('news by id', this.NewsDetails);
      });
    });
    this.initFormGroup();
  }

  initFormGroup() {
    this.newscreateUpdate = this.formBuilder.group({
      Headline: [this.NewsDetails ? this.NewsDetails.Headline : '', Validators.required],
      SortDescription: [this.NewsDetails ? this.NewsDetails.SortDescription : '', Validators.required],
      LongDescription: [this.NewsDetails ? this.NewsDetails.LongDescription : '', Validators.required],
      PostedBy: [this.NewsDetails ? this.NewsDetails.PostedBy : [2], Validators.required],
    });
  }

  onSubmitFormUpdate() {
    if (this.newscreateUpdate.valid === true)
      this.mewsService
        .updateNewsFn(this.NewsId, this.newscreateUpdate.value)
        .subscribe((res) => console.log('news update', res));
  }
}
