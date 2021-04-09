import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        this.dialog.open(DialogComponent, {});
    }
}
