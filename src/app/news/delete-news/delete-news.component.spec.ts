import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNewsComponent } from './delete-news.component';

describe('DeleteNewsComponent', () => {
  let component: DeleteNewsComponent;
  let fixture: ComponentFixture<DeleteNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteNewsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
