import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableLibrosComponent } from './table-libros.component';

describe('TableLibrosComponent', () => {
  let component: TableLibrosComponent;
  let fixture: ComponentFixture<TableLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableLibrosComponent, BadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
