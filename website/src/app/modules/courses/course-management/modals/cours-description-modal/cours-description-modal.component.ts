import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cours-description-modal',
  template: `<h3 style="font-weight: bold;">{{data.title}}</h3>
             <br/>
             <p>{{data.description}}</p>
             <div class="px-6 py-4 text-right">
                                    <button mat-stroked-button (click)="closeModal()">
                                        <span class="inline-flex items-center">
                                            <ng-container>
                                                <span>Close</span>
                                            </ng-container>
                                        </span>
                                    </button>
                                </div>`,
  styleUrls: []
})
export class CoursDescriptionModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CoursDescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.dialogRef.close();
  }
}
