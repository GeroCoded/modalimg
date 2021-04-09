import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImageViewerConfig } from 'angular-x-image-viewer';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
    config: ImageViewerConfig = {
        btnIcons: {
            // The icon classes that will apply to the buttons. By default, font-awesome is used.
            zoomIn: 'bi bi-zoom-in',
            zoomOut: 'bi bi-zoom-out',
            rotateClockwise: 'bi bi-arrow-clockwise',
            rotateCounterClockwise: 'bi bi-arrow-counterclockwise',
            next: 'bi bi-arrow-right',
            prev: 'bi bi-arrow-left',
            fullscreen: 'bi bi-arrows-fullscreen'
        }
    };

    constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
