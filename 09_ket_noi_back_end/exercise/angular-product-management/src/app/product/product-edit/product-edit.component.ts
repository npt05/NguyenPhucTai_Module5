import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category/category.service';
import {Product} from '../../model/product';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  editForm: FormGroup;
  id: number;
  categorys: any;



  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.findById(this.id).subscribe(product => {
        this.editForm = new FormGroup({
          name: new FormControl(product.name),
          price: new FormControl(product.price),
          description: new FormControl(product.description),
          category: new FormControl(product.category),
        });
      });
    });
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getAll().subscribe(categorys => {
      this.categorys = categorys;
    });
  }

  updateProduct(id: number) {
    const product = this.editForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      this.router.navigate(['/']);
    }, e => {
      console.log(e);
    });
  }
  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

}
