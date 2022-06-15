import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    NewsComponent,
    AllNewsComponent,
    CreateNewsComponent,
    UpdateNewsComponent,
    DeleteNewsComponent,
    ViewComponent,
    DeleteComponent,
  ],
  imports: [CommonModule, NewsRoutingModule, MaterialModule, ReactiveFormsModule, HttpClientJsonpModule],
})
export class NewsModule {}
