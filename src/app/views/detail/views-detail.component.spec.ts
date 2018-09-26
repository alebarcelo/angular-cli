import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsDetailComponent } from './views-detail.component';

describe('ViewsDetailComponent', () => {
  let component: ViewsDetailComponent;
  let fixture: ComponentFixture<ViewsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
