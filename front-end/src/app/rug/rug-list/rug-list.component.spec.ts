/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RugListComponent } from './rug-list.component';

describe('RugListComponent', () => {
  let component: RugListComponent;
  let fixture: ComponentFixture<RugListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RugListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RugListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
