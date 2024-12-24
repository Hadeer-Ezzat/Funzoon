import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileItem, FileUploader } from 'ng2-file-upload';
import { UrlsConstants } from 'src/app/core/constants';

@Component({
  selector: 'app-file-uploader-with-table-control',
  templateUrl: './file-uploader-with-table-control.component.html',
  styleUrls: ['./file-uploader-with-table-control.component.scss']
})
export class FileUploaderWithTableControlComponent implements OnInit {

  // @Output() attachmentEmitter = new EventEmitter<FileItem[]>()
  @Output() uploadertEmitter = new EventEmitter<FileUploader>()

  constructor() { }

  ngOnInit(): void {
  }

  uploader: FileUploader = new FileUploader({
    url: UrlsConstants.fileUpload,
    disableMultipart : false,
    method: 'post',
    itemAlias: 'attachment',
    allowedFileType: ["image"],
    allowedMimeType: ['image/jpeg', 'image/png' ],
    autoUpload: false,
    removeAfterUpload: false,
    queueLimit: 9,
    maxFileSize: 1024 * 1024 * 1
  });

  onFileSelected(event: EventEmitter<File[]>) {
    // this.attachmentEmitter.emit(this.uploader.queue)
    this.uploadertEmitter.emit(this.uploader)
  }

}
