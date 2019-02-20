import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public all:any = null;
  public all2:any = null;
  public rootApi = "http://127.1.0.1/dtbapi/";
  constructor(public http:HttpClient) {
    this.http
    .get("http://127.1.0.1/dtbapi/read/readla.php?showall")
    .subscribe((data: any) => {
       this.all = data;
      });

      this.http
      .get("http://127.1.0.1/dtbapi/read/readla2.php?showall")
      .subscribe((data: any) => {
         this.all2 = data;
        });
  }

  ngOnInit() {
  }

}
