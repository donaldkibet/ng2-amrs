import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BsModalService, BsModalRef ,  ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'lab-result-image-modal',
  templateUrl: './lab-result-image-modal.component.html',
  styleUrls: ['./lab-result-image-modal.component.css']
})
export class LabResultImageModalComponent implements OnInit, OnChanges {

public modalRef: BsModalRef;
@Input() public title = '';
@Input() public imageLinks = [];
@Input() public showImageModal = false;
@Output() public modalClose = new EventEmitter<boolean>();
@ViewChild('imageModal') public imageModal: ModalDirective;


  constructor() {
  }

  public ngOnInit() {
  }
  public ngOnChanges(changes: SimpleChanges) {
      if (changes.showImageModal && changes.showImageModal.currentValue === true) {
         this.showModal();
      }

  }
  public showModal() {
    this.imageModal.show();
  }
  public hideModal() {
    this.imageModal.hide();
    this.modalClose.emit(true);
  }
}
