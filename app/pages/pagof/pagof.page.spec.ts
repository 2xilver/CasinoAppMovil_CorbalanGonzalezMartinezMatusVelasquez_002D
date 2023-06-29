import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagofPage } from './pagof.page';

describe('PagofPage', () => {
  let component: PagofPage;
  let fixture: ComponentFixture<PagofPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagofPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
