import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCompletPage } from './menu-complet.page';

describe('MenuCompletPage', () => {
  let component: MenuCompletPage;
  let fixture: ComponentFixture<MenuCompletPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuCompletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
