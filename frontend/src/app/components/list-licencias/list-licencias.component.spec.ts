import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLicenciasComponent } from './list-licencias.component';

describe('ListLicenciasComponent', () => {
  let component: ListLicenciasComponent;
  let fixture: ComponentFixture<ListLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
