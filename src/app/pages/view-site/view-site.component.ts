import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../../Models';
import { HttpClient } from '@angular/common/http';
import { MasterServeService } from '../../Services/master-serve.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-site',
  standalone: false,
  templateUrl: './view-site.component.html',
  styleUrl: './view-site.component.css'
})
export class ViewSiteComponent {
  id: number = 0;
  site: Site = {} as Site;
  form: FormGroup = ({}) as FormGroup;
  constructor(private location: Location, private activRout: ActivatedRoute,private masrServ:MasterServeService,private formBlder:FormBuilder) {
    this.activRout.paramMap.subscribe(id => this.id = Number(id.get('id')));
    this.masrServ.getSiteById(this.id).subscribe(d => {
      this.site = d.data 
      this.form.patchValue({city:this.site.city,location:this.site.location,sitetitle:this.site.siteTitle,siteid:this.site.siteId,totalprops:this.site.totalProperties,
        proptypeid: this.site.propertyTypeId,pincode:this.site.pincode,creatDate:this.site.createdDate,lastDate:this.site.lastUpdatedDate,state:this.site.state
      });
    })

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

  goBack() {
    this.location.back();
  }
}
