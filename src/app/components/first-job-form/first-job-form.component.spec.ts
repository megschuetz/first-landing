import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstJobFormComponent } from './first-job-form.component';

describe('FirstJobFormComponent', () => {
  let component: FirstJobFormComponent;
  let fixture: ComponentFixture<FirstJobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstJobFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstJobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
