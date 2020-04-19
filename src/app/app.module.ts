import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule} from 'ngx-pagination';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { taskFilterPipe } from './quotes/task-filter.pipe';
import { DetailsComponent } from './details/details.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    taskFilterPipe,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatDialogModule,MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatPaginatorModule,NgxPaginationModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[QuoteComponent]
})
export class AppModule { }
