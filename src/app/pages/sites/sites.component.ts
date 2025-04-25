import { Component, OnInit, signal,NgModule } from '@angular/core';
import { Site, AllIpropType, IPropType } from '../../Models';
import { MasterServeService } from '../../Services/master-serve.service';

@Component({
  selector: 'app-sites',
  standalone: false,
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent implements OnInit {
  isFormView = signal<boolean>(false);
  toglename: string = 'Add Site +';
  formobj = new Site();
  allSites: Site[] = [];
  dataAry: IPropType[] = [];
  constructor(private mstrServe: MasterServeService) {
    this.mstrServe.getAllPropType().subscribe(prop=>this.dataAry=prop.data)
    this.mstrServe.getAllSites().subscribe((dat) => {this.allSites = dat.data})
  }
  ngOnInit(): void {}
  toggle() {
    this.isFormView.set(!this.isFormView());
    if (this.isFormView()) {
      this.toglename = 'Close Form X'
    } else {
      this.toglename = 'Add Site +'
    }
  }
  addsite() {
    this.mstrServe.addSite(this.formobj).subscribe(
      data => console.log(data.data)
    )
  }

  deletsite(id:Number) {
    this.mstrServe.deletSite(id).subscribe({
      complete:(()=>console.log(confirm))
    })
  }
}
