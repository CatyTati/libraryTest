import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  books: Book[] = []

  constructor(private httpClient: HttpClient,) { }

  SetBooks(books: Book[]) {
    this.books = books;
  }

  addToLibrary(book) {
    this.books.push(book);
    return this.books;
  }

  removeBook(book: Book){
    //let index =  this.books.indexOf(book);
    //this.books.splice(index, 1); 
    this.books =  this.books.filter(b => b !== book);    
    return this.books
  }
  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>("assets/books.json");
  }

  clearLibrary() {
    this.books = [];
    return this.books;
  }
}
export class Book{
  Author:string;
  Book:string;
  Date:Date;
  CatalogId:number;
  Path:string;
}
