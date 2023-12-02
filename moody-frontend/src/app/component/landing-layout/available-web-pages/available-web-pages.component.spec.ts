import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableWebPagesComponent } from './available-web-pages.component';

describe('AvailableWebPagesComponent', () => {
  let component: AvailableWebPagesComponent;
  let fixture: ComponentFixture<AvailableWebPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableWebPagesComponent]
    });
    fixture = TestBed.createComponent(AvailableWebPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
