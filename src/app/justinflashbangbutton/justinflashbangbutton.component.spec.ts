import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustinflashbangbuttonComponent } from './justinflashbangbutton.component';

describe('JustinflashbangbuttonComponent', () => {
  let component: JustinflashbangbuttonComponent;
  let fixture: ComponentFixture<JustinflashbangbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustinflashbangbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustinflashbangbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
