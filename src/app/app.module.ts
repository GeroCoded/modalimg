import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularImageViewerModule } from 'angular-x-image-viewer';
import { AppComponent } from './app.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [AppComponent, DialogComponent],
    entryComponents: [AppComponent, DialogComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        AngularImageViewerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
