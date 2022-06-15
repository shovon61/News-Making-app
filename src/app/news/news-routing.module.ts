import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllNewsComponent } from './all-news/all-news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';
import { DeleteComponent } from './delete/delete.component';
import { NewsComponent } from './news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      { path: 'create', component: CreateNewsComponent },
      { path: 'list', component: AllNewsComponent },
      { path: 'update/:id', component: UpdateNewsComponent },
      { path: 'delete/:id', component: DeleteNewsComponent },
      { path: 'view', component: ViewComponent },
      { path: 'delete', component: DeleteNewsComponent },
      { path: 'del', component: DeleteComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
