import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSnipetComponent } from './tarjeta-snipet.component';

describe('TarjetaSnipetComponent', () => {
  let component: TarjetaSnipetComponent;
  let fixture: ComponentFixture<TarjetaSnipetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaSnipetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSnipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
