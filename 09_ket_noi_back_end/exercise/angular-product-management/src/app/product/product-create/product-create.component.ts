import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productObj: Product;
  categorys: Category[];
  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });


  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getAll().subscribe(categorys => {
      this.categorys = categorys;
    });
  }

  submit() {
    this.productObj = this.createForm.value;
    this.productService.saveProduct(this.productObj).subscribe(() => {
      this.router.navigate(['/']);
    }, e => {
      console.log(e);
    });
  }

}
