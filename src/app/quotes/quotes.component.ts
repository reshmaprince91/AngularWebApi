import { Component, OnInit, ViewChild } from '@angular/core';
import { QuoteService } from '../shared/quote.service';
import { Quote } from '../shared/quote.model';
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { QuoteComponent } from './quote/quote.component';
import { MatPaginator} from '@angular/material/paginator';  
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  searchTerm : string;
  

  constructor(public service : QuoteService,  
    private toastr : ToastrService,
    private  dialog: MatDialog) { }
    

    //@ViewChild(MatPaginator) paginator : MatPaginator;
    
    ngOnInit(){
      this.service.refreshList();
      
    }
    populateForm(qte : Quote){
      this.service.formData = Object.assign({},qte);
    }
  
    onDelete(id : number)
    {
      if(confirm('Are you sure to delete this record?')){
      this.service.deleteQuote(id).subscribe(()=>{
        this.service.refreshList();
        this.toastr.info('Deleted Successfully','Quote');
      });
  
    }
  }
  AddorEdit(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="60%";
    this.dialog.open(QuoteComponent,dialogConfig);
  }
  onEdit(){
    // this.service.populateForm();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus = true;
    dialogConfig.width="60%";
    this.dialog.open(QuoteComponent,dialogConfig);
  }
  }
  