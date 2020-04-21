import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamInfoComponent } from './cam-info.component';

describe('CamInfoComponent', () => {
  let component: CamInfoComponent;
  let fixture: ComponentFixture<CamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
