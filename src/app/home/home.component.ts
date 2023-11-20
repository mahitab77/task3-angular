import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from "./topbar/topbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, TopbarComponent]
})
export class HomeComponent {

}
