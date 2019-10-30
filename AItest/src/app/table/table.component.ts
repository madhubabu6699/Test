import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {timer} from 'rxjs';
import { AIService } from '../ai.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  rawdata:any;
  details:any;
  datatimer:any;

  constructor( private tabledata:AIService) { }

  ngOnInit() {
    this.datatimer=timer(0,10000).pipe(
      switchMap(()=>this.tabledata.getMethod())
    ).subscribe((res:any)=>{
      console.log(res);
      this.details=res.hits;
    });
  }

  modaldata(id){
    this.rawdata=id;
  }

}
