import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HomeComponent, FormComponent, FormsModule, ReactiveFormsModule]
})
export class AppComponent {
  title = 'v17-angular-project';
}
