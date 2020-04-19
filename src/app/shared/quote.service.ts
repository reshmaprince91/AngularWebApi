import { Injectable } from '@angular/core';
import { Quote } from './quote.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  formData : Quote;
  list : Quote[];
  readonly rootURL = "https://localhost:44355/api"
  constructor(private http : HttpClient) { }
  postQuote(formData : Quote){
    return this.http.post(this.rootURL+'/Quote',formData);
    }
  
    refreshList(){
      this.http.get(this.rootURL+'/Quote')
      .toPromise().then(res => this.list = res as Quote[]);
    }
    
    putQuote(formData : Quote){
      return  this.http.put(this.rootURL+'/Quote/'+formData.quoteid,formData);
      }
  
      deleteQuote(id : number){
        return this.http.delete(this.rootURL+'/Quote/'+id);
      }  
      getQuote(id){
        return  this.http.get(this.rootURL+'/Quote/'+id);
      }
      // populateForm(){
      //   this.formData.
      // }
  }
