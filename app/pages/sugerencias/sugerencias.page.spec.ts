import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SugerenciasPage } from './sugerencias.page';
import { IonicModule } from '@ionic/angular';

describe('SugerenciasPage', () => {
  let component: SugerenciasPage;
  let fixture: ComponentFixture<SugerenciasPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SugerenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
