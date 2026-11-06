import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing-module';

describe('AppRoutingModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule],
    });
  });

  it('debería configurar HashLocationStrategy para la navegación', () => {
    const locationStrategy = TestBed.inject(LocationStrategy);
    expect(locationStrategy).toBeInstanceOf(HashLocationStrategy);
  });
});
