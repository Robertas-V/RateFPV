import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewItemComponent } from './page-new-item.component';

describe('PageNewItemComponent', () => {
  let component: PageNewItemComponent;
  let fixture: ComponentFixture<PageNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
