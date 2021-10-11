import { Component, OnInit } from '@angular/core';
import {Service} from '../../../../model/service/Service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ServiceService} from '../../../service/service/service.service';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.component.html',
  styleUrls: ['./view-service.component.css']
})
export class ViewServiceComponent implements OnInit {

  id: number;
  service: Service;
  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private serviceService: ServiceService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.serviceService.findById(this.id).subscribe(data=>{
        this.service = data;
      });
    });
  }
  ngOnInit(): void {
  }
}
