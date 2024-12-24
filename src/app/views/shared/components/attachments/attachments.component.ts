import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { 
  UnsucceedResponseHandlerService,
  AppGlobalRouterService } from 'src/app/services'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { APIResponse, BookingStep, WizardAttachments } from 'src/app/core/models'
import { FormControlErrorsEnum } from 'src/app/core/enums'
import { FileItem, FileUploader } from 'ng2-file-upload'
import { HttpClient } from '@angular/common/http'
import { PoolDto } from 'src/app/core/dtos'
import { UrlsConstants } from 'src/app/core/constants'

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})

export class AttachmentsComponent implements OnInit {

  formGroup: FormGroup
  submitted: boolean = false
  isCoverPreviewed: boolean = false
  errorType = FormControlErrorsEnum
  attachmentsFiles: FileItem[] = []
  uploader: FileUploader
  coverImageFile: File
  @Output() formEmitter = new EventEmitter<FormGroup>()
  @Output() modelEmitter = new EventEmitter<WizardAttachments>()

  bookingSteps: BookingStep[] = [
    {
      stepNumber: 1,
      name: 'A guest finds your listing',
      description: "Your listing will show up in search results. Remember to keep your calendar updated to avoid requests for days you can't host."
    },
    {
      stepNumber: 2,
      name: 'A guest finds your listing',
      description: "Your listing will show up in search results. Remember to keep your calendar updated to avoid requests for days you can't host."
    },
    {
      stepNumber: 3,
      name: 'A guest finds your listing',
      description: "Your listing will show up in search results. Remember to keep your calendar updated to avoid requests for days you can't host."
    },
    {
      stepNumber: 4,
      name: 'Test',
      description: "Test Test Test Test Test Test Test Test "
    },
    
  ]

  constructor(
    private httpClient: HttpClient,
    private unsucceedResponseHandlerService: UnsucceedResponseHandlerService,
    private appGlobalRouterService: AppGlobalRouterService,
    private formBuilder: FormBuilder) { }
    imagePath: any
    imgURL: any

  ngOnInit(): void {
    this.formInit()
    this.setupEmitter()
  }

  get form(){ return this.formGroup.controls }

  formInit(){
    this.formGroup = this.formBuilder.group({
      advanceNotice:      ['', [Validators.required]],
      availabilityWindow: ['', [Validators.required]],
      coverImage:         ['', [Validators.required]]
    })
  }

  // https://next.angular.io/guide/deprecations#deprecated-features
  get wizardAttachments(): WizardAttachments{
    return {
      advanceNotice:       this.formGroup.get('advanceNotice').value,
      availabilityWindow:  this.formGroup.get('availabilityWindow').value,
      attachmentsFiles:    this.attachmentsFiles,
      mainAttachmentsFile: this.coverImageFile,
      uploader:            this.uploader
    }
  }
  
  setupEmitter(){
    this.emitAll()
    this.formGroup.valueChanges.subscribe(x => {
      this.submitted = true
      this.emitAll()
    })
  }
  
  emitAll(){
    this.formEmitter.emit(this.formGroup)
    this.modelEmitter.emit(this.wizardAttachments)
  }

  additionalFilesAttached(attachedFiles){
    this.attachmentsFiles = attachedFiles
    this.emitAll()
  }

  updateUploader(updatedUploader){
    this.uploader = updatedUploader
    this.attachmentsFiles = this.uploader.queue
    this.emitAll()
  }

  isUploadedMinRequiredPoolImages(): boolean{
    return this.uploader && this.uploader.queue.length > 2
  }

  preview(files) {
    if (files.length === 0)
      return 
 
    var reader = new FileReader()
    this.imagePath = files
    reader.readAsDataURL(files[0]) 
    reader.onload = (_event) => { 
      this.imgURL = reader.result 
    }

    this.coverImageFile = files[0]
    this.emitAll()
  }

}
