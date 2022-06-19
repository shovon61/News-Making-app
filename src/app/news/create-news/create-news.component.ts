import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../news/service/news.service';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss'],
})
export class CreateNewsComponent implements OnInit {
  newscreate!: FormGroup;
  display = '';
  constructor(private formBuilder: FormBuilder, private newsservice: NewsService) {}

  ngOnInit(): void {
    this.newscreate = this.formBuilder.group({
      Headline: ['', Validators.required],
      SortDescription: ['', Validators.required],
      LongDescription: ['', Validators.required],
      PostedBy: [[1]],
    });
  }
  onSubmitForm() {
    console.log(this.newscreate.valid);
    if (this.newscreate.valid === true)
      this.newsservice.addNewsFn(this.newscreate.value).subscribe((res) => console.log(res));
  }
  show(val: any) {
    console.log('created the value', val);
    this.display = val;
  }
}
