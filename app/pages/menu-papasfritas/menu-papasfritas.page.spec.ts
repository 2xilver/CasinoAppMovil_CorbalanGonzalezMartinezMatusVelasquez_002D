import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPapasfritasPage } from './menu-papasfritas.page';

describe('MenuPapasfritasPage', () => {
  let component: MenuPapasfritasPage;
  let fixture: ComponentFixture<MenuPapasfritasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuPapasfritasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
