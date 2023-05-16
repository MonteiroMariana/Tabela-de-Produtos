import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProdutoComponent } from './tab-produto.component';

describe('TabProdutoComponent', () => {
  let component: TabProdutoComponent;
  let fixture: ComponentFixture<TabProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
