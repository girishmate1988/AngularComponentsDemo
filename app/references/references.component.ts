import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  imagePath: string ='https://i.ytimg.com/vi/2FkkAqFWRk8/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAFUMqQexMCPR5IdxHe7_RXYMmt8Q';
  imagePath1: string ='https://udemy-images.udemy.com/course/240x135/1391332_0f50.jpg';

  constructor() { }

  ngOnInit() {
  }

}
