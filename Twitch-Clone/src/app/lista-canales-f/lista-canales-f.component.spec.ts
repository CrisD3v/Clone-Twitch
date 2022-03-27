import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCanalesFComponent } from './lista-canales-f.component';

describe('ListaCanalesFComponent', () => {
  let component: ListaCanalesFComponent;
  let fixture: ComponentFixture<ListaCanalesFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCanalesFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCanalesFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
