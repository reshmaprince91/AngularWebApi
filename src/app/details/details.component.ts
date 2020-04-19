import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id : number;
  data : any;

  constructor(private route : ActivatedRoute,
    private service : QuoteService) { }

  ngOnInit(){
     this.id = this.route.snapshot.params['id'];
     this.getQuote();
  }
  getQuote(){
    this.service.getQuote(this.id).subscribe(data=>{
      this.data = data;
      console.log(this.data);
    })
  }

}
