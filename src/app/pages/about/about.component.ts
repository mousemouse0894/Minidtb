import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  public rootApi = "http://127.1.0.1/dtbapi/";
  public all:any = null;
  public typew = "ชนิดคำ";
  public typeno = "";
  public caw = "ประเภทคำ";
  public cano = "";
  constructor(public http:HttpClient) {
      this.onstarts();
  }

  ngOnInit() {
  }

public onstarts(){
  this.http
  .get(this.rootApi + `read/wordall.php?showall`)
  .subscribe((data: any) => {
     this.all = data;
    });
}

 public ondel(No,EngWords,TypeNo){
  console.log(No,EngWords,TypeNo);
  this.http
  .get(this.rootApi + `delate/delateword.php?no=`+No)
  .subscribe((data: any) => {
    if (data.result) {
      this.onstarts();
    } else {
    }
  });
 }

 public typews(t){
  this.typew = t;
  if(t == "1.ศัพท์คอมพิวเตอร์และเทคโนโลยีสารสนเทศ"){
    this.typeno = "1";
  }else if(t == "2.ศัพท์เทคโนโลยีสารสนเทศ"){
    this.typeno = "2";
  }else if(t == "3.อื่นๆ"){
    this.typeno = "3";
  }
 }

 public ca(c){
  this.caw = c;
if(c == "1.ศัพท์บัญญัติ"){
  this.cano = "1";
}else if(c == "2.คําทับศัพ"){
  this.cano = "2";
}
}

 public onin(eng,th,de){
console.log(eng,th,this.typeno,this.cano,de);
let data={
  No : "",
  ThaiWords : th,
  EngWords : eng,
  TypeNo : this.typeno,
  CategoryNo : this.cano,
  Description : de
};
this.http
.get(this.rootApi + "insert/inword.php?data=" + JSON.stringify(data))
.subscribe((data: any) => {
  if (data.result) {
    this.typew = "ชนิดคำ";
    this.caw = "ประเภทคำ";
    location.reload();

  } else {

  }
});

return false;
 }

}
