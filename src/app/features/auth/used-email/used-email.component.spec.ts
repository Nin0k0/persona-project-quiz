import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedEmailComponent } from './used-email.component';

describe('UsedEmailComponent', () => {
  let component: UsedEmailComponent;
  let fixture: ComponentFixture<UsedEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
