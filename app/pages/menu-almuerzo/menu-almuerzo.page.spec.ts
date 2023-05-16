import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuAlmuerzoPage } from './menu-almuerzo.page';

describe('MenuAlmuerzoPage', () => {
  let component: MenuAlmuerzoPage;
  let fixture: ComponentFixture<MenuAlmuerzoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuAlmuerzoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
