import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOffersComponent } from './what-offers.component';

describe('WhatOffersComponent', () => {
  let component: WhatOffersComponent;
  let fixture: ComponentFixture<WhatOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatOffersComponent]
    });
    fixture = TestBed.createComponent(WhatOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
