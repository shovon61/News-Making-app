import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  template: `
    <section>
      <button style="margin-top: 10px ;" routerLink="create" mat-raised-button color="accent">Create</button>
      <button routerLink="view" mat-raised-button color="primary">VIEW</button>
      <button routerLink="list" mat-raised-button color="warn">EDIT</button>
      <button routerLink="del" mat-raised-button color="primary">Delete</button>
    </section>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class NewsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
