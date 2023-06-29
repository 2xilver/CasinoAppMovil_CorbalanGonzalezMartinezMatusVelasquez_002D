import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuHamburguesaPage } from './menu-hamburguesa.page';

describe('MenuHamburguesaPage', () => {
  let component: MenuHamburguesaPage;
  let fixture: ComponentFixture<MenuHamburguesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuHamburguesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
