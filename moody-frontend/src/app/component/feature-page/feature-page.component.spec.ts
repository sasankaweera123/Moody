import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePageComponent } from './feature-page.component';

describe('FeaturePageComponent', () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturePageComponent]
    });
    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
