import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMainComponent } from './lista-main.component';

describe('ListaMainComponent', () => {
  let component: ListaMainComponent;
  let fixture: ComponentFixture<ListaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
