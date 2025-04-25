import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllIpropType, ICustomer, IPropType, Updt } from '../../Models';
import { MasterServeService } from '../../Services/master-serve.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isFormView: boolean = false;
  customerArr: ICustomer[] = [];
  customer: ICustomer = {} as ICustomer;
  closeForm: string = 'Add Customer +';
  imgsrc:any="/Assits.logo.png"
  constructor(private masterServ: MasterServeService) {
    this.masterServ.getAllcustomers().subscribe(d => this.customerArr = d.data);
  }
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    cutId: [''],
    name:[''],
    email: [''],
    mobile: [''],
    address:['']
  })

  onSbmit() {
    console.log(this.form.value)
    this.customer = <ICustomer>this.form.value;
    this.masterServ.addCustomer(this.customer).subscribe((d)=>console.log(d))
  }
  openForm() {
    this.isFormView = !this.isFormView
    if(this.isFormView)
    {
      this.closeForm='Close Form X'
    }
    else {
      this.closeForm='Add Cuatomer +'
    }
  }
  delet(id:number) {
    this.masterServ.deletCutomer(id).subscribe({
      next:(d=>console.log(d)),
    });
  }
}
