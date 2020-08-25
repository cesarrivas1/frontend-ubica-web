import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarSolicitudesComponent } from './sidebar-solicitudes.component';

describe('SidebarSolicitudesComponent', () => {
  let component: SidebarSolicitudesComponent;
  let fixture: ComponentFixture<SidebarSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
