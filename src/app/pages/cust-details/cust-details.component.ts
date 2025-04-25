import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllIpropType, ICustomer } from '../../Models';
import { Router,ActivatedRoute } from '@angular/router';
import { MasterServeService } from '../../Services/master-serve.service';
import { Location } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cust-details',
  standalone: false,
  
  templateUrl: './cust-details.component.html',
  styleUrl: './cust-details.component.css'
})
export class CustDetailsComponent implements OnInit {
  id: number = 0;
  customer: ICustomer={} as ICustomer;
  constructor(private http: HttpClient, private actrouter: ActivatedRoute, private mstrser: MasterServeService,
    private location:Location
  )
  {


    this.actrouter.paramMap.subscribe((par) => { this.id = Number(par.get('id')) })
    this.mstrser.getCustomerByid(this.id).subscribe(d => {
      this.customer = d.data;
      this.form.patchValue({
        name: this.customer.name,
        cutId: String(this.customer.custId),
        email: this.customer.emailid,
        address: this.customer.address,
        mobile: this.customer.mobile
      });
    });
  }

   private formBuilder = inject(FormBuilder);
    form = this.formBuilder.group({
      cutId: [''],
      name:[''],
      email: [''],
      mobile: [''],
      address:['']
    })
  
  ngOnInit(): void {
  };
  
  goBack() {
    this.location.back();
  }

  onSave() {
    if(this.form.dirty){
      alert('upadte')
      this.customer = this.form.value as ICustomer
      this.mstrser.updatCustomer(this.customer).subscribe({
        complete:(()=>console.log())
      })
    }
   } 
  }

  