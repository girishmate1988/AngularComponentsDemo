import { Component,OnInit } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']    
})

export class ServerComponent implements OnInit{

    allowNewServer = false;
 
    num1: number = 0;
    num2: number = 0;
    num3: number = 0;
    num4: number = 0;
    alert_message: string = 'Success';
    //servers12 = ['Server1','Server2','Server3'];

    ServerID: number = 10;
    //ServerName: string = 'DCS-AUH';
    ServerName = 'Test Server'
    ServerCreationStatus = 'No Server was created !';
    ServerCreated = false;
    ServerStatus = '';

    applyBoldClass = true;
    applyItalicClass = true;
    classesToApply ='boldClass italicClass';

    isGreen = false;
    fontSize = 50;

     getServerStatus() {
         return this.ServerStatus;
     } 

     ngOnInit(){

     }

     constructor(){ 
         setTimeout(() => {
             this.allowNewServer = true;
         }, 5000);

         this.ServerStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
     }

     getColor(){     
        return this.ServerStatus === 'Online' ? 'green' : 'red'; 
     }

     OnCreateServer()
     {
         this.ServerCreated = true;
         this.ServerCreationStatus = 'New Server was created, Name is '+this.ServerName;
     }

     OnUpdateServerName(event: any)
     {
        //console.log(event);
        this.ServerName=(<HTMLInputElement>event.target).value;
     }

     addClass()
     {
         let styles = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass            
         }

         return styles; 
     }

     addStyles()
     {
         let styles = {
             'font-size.px':this.fontSize,
             'font-style': this.applyItalicClass ? 'italic' : 'normal',
             'font-weight': this.applyBoldClass ? 'bold' : 'normal'
         }

         return styles;
     }
}