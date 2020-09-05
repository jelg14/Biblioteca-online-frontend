import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosYRevistasComponent } from './libros-y-revistas.component';

describe('LibrosYRevistasComponent', () => {
  let component: LibrosYRevistasComponent;
  let fixture: ComponentFixture<LibrosYRevistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosYRevistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosYRevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
