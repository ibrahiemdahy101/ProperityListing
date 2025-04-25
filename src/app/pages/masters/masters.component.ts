import { Component } from '@angular/core';
import { MasterServeService } from '../../Services/master-serve.service';
import { IMasterProp } from '../../Models';
@Component({
  selector: 'app-masters',
  standalone: false,
  templateUrl: './masters.component.html',
  styleUrl: './masters.component.css'
})

export class MastersComponent {
  allMaserProp: IMasterProp[] = [];
  constructor(private mstrServce: MasterServeService) {
    this.mstrServce.getAllMasterProp().subscribe(d=>this.allMaserProp=d.data)
   };
}
