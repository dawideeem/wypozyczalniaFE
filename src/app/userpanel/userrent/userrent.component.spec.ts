import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrentComponent } from './userrent.component';

describe('UserrentComponent', () => {
  let component: UserrentComponent;
  let fixture: ComponentFixture<UserrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
