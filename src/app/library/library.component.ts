import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';

import { ServiceService, Book } from '../app/service.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books
  libraryForm: FormGroup
  search='';
  constructor(
    private formBuilder: FormBuilder,
    private libraryService: ServiceService) {

    this.libraryForm = this.formBuilder.group({
      Author: '',
      Book: '',
      Date: '',
      CatalogId: '',
      Path:''
    });
   }

  ngOnInit(): void {
    this.libraryService.getBooks().subscribe(res =>{
      this.books = res as [];
      this.libraryService.SetBooks(this.books);
    }
    );
  }
  remove(book: Book){
    this.books = this.libraryService.removeBook(book);
  }
  onSubmit(bookData: Book) {
     this.books = this.libraryService.addToLibrary(bookData);
  }
}
