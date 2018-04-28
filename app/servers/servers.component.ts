import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', Attrubute selector
  // selector: '.app-servers', Style Class selector
  templateUrl: './servers.component.html',
  selector: 'app-servers',
  //template: `
  //<app-server></app-server> Element selector
  //<app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  num5: number=0;
  num6: number=0;
  num7: number=0;
  num8: number=0;
  alert_message: string ='Failure';
  

  constructor() { }

  ngOnInit() {
    
  }

}
