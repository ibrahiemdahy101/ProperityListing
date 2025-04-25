import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MasterServeService } from '../../Services/master-serve.service';
import { AllIpropType,IPropType } from '../../Models';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-properity-type',
  standalone: false,
  templateUrl: './properity-type.component.html',
  styleUrl: './properity-type.component.css'
})
export class ProperityTypeComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  gridData: IPropType[] = [];
  constructor(private mstrServ: MasterServeService,private http:HttpClient) {
    this.intilaizeForm();
  }
  
  ngOnInit(): void {
    this.getAllprops();
  }
  getAllprops() {
    this.mstrServ.getAllPropType().subscribe((prps: AllIpropType) => {
      this.gridData = prps.data
    },
    )
  }
  save() {
    this.mstrServ.addNewPropType(this.form.value).subscribe(d=>console.log(d))
  }
  updatData(data: IPropType) {
    this.intilaizeForm(data)
  }
  deletData(propid:Number){
    this.mstrServ.deletePropType(propid).subscribe(() => {confirm('wanna delet')})
  }
  loaddat() {
    this.mstrServ.updatPropType(this.form.value).subscribe(d=>console.log(d))
  }

  intilaizeForm(item?:IPropType) {
    this.form = new FormGroup({
      propertTypeId: new FormControl<any>(item?item.propertTypeId:0),
      propertyType:new FormControl<string>(item?item.propertyType:"")
    })
  }
}
