import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './service/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { BookCategoryComponent } from './components/book-category/book-category.component';
import { SearchComponent } from './components/search/search.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { JwPaginationComponent } from 'jw-angular-pagination';


const routes: Routes =[
 {path:'books/:id', component: BookDetailsComponent},
 {path:'books', component: BookListComponent},
 {path:'search/:keyword', component: BookListComponent},
 {path:'category/:id', component: BookListComponent},
 {path:'', redirectTo: '/books', pathMatch: 'full'},
 {path:'**', component:PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookListComponent,
    PageNotFoundComponent,
    BookCategoryComponent,
    BookDetailsComponent,
    JwPaginationComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
