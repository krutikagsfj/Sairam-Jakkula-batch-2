import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productbrands',
  templateUrl: './productbrands.component.html',
  styleUrls: ['./productbrands.component.css']
})
export class ProductbrandsComponent implements OnInit {

  constructor(private ps:ProductService) { }

  Data;
// calling the service function from through the refernce variable
// for geting the data of json file readed 

  ngOnInit() {
    this.ps.getproducts().subscribe(info=>
      {
        this.Data=info;
        console.log(info);
      }),
      err=>
      {
        console.log(err);
      }
  }
}
