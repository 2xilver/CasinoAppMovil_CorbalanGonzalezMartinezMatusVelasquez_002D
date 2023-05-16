import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SugerenciasPage } from './sugerencias.page';

describe('SugerenciasPage', () => {
  let component: SugerenciasPage;
  let fixture: ComponentFixture<SugerenciasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SugerenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
