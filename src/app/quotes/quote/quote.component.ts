import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/shared/quote.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  

  constructor(public service : QuoteService,
    private toastr : ToastrService,
    public dialogRef : MatDialogRef<QuoteComponent>) { }

    ngOnInit(){
      this.resetForm()
    }
  
    resetForm(form? : NgForm){
      if (form != null)
      form.resetForm();
      this.service.formData = {
         quoteid: null,
         quotetype:'',
         Contact:'',
         description:'',
         duedate:'',
         tasktype:''
      }
    }
     onSubmit(form : NgForm){
      if(form.value.quoteid == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
    this.onClose(form);
    }
  
    insertRecord(form : NgForm){
      this.service.postQuote(form.value)
      .subscribe(res => {
        this.toastr.success('Inserted Successfully','Quote');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
    updateRecord(form : NgForm){
      this.service.putQuote(form.value)
      .subscribe(res => {
        this.toastr.info('Updated Successfully','Quote');
        this.resetForm(form);
        this.service.refreshList();
      });
    }
  
    onClose(form : NgForm){
      this.resetForm();
      this.dialogRef.close();
    }
   
  }
  