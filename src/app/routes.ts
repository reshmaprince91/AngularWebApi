import { Routes } from '@angular/router'
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { Quote } from '@angular/compiler';
import { QuoteComponent } from './quotes/quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailsComponent } from './details/details.component';

export const appRoutes: Routes = [
    {path:'quote', component:QuoteComponent},
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path:'quotes',component:QuotesComponent,
        children:[{path:'',component:QuotesComponent}]
    },
    {path:'details/:id', component:DetailsComponent},
    { path : '', redirectTo:'/login', pathMatch : 'full'}
    
];