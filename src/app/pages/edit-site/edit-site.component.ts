import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../../Models';
import { MasterServeService } from '../../Services/master-serve.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-site',
  standalone: false,
  templateUrl: './edit-site.component.html',
  styleUrl: './edit-site.component.css'
})
export class EditSiteComponent implements OnInit {
  site: Site = {} as Site;
  id: Number = 0;
  form: FormGroup = ({}) as FormGroup;
  constructor(
    private activRout: ActivatedRoute,
    private masterServr: MasterServeService,
    private formBlder: FormBuilder,
  )

  {
    //Get id form url
    this.activRout.paramMap.subscribe((url => this.id = Number(url.get('id'))));
    //assign site from API to site interface object
    this.masterServr.getSiteById(this.id).subscribe(res => {
      this.site = res.data;
      this.form.patchValue({city:this.site.city,location:this.site.location,sitetitle:this.site.siteTitle,siteid:this.site.siteId,totalprops:this.site.totalProperties,
        proptypeid: this.site.propertyTypeId,pincode:this.site.pincode,creatDate:this.site.createdDate,lastDate:this.site.lastUpdatedDate,state:this.site.state
      });
    }
    );
    this.form = this.formBlder.group({
      siteid: [""],
      sitetitle: [''],
      location: [''],
      proptypeid: [''],
      lastDate: [''],
      city: [''],
      pincode: [''],
      state: [''],
      totalprops: [''],
      creatDate: [''],
    });
  }  

  ngOnInit(): void { 
    console.log();

  };




  onSubmit() {

}
}
