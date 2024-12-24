import { FileItem, FileUploader } from "ng2-file-upload"

export class WizardAttachments{
    advanceNotice: number
    availabilityWindow: number
    attachmentsFiles: FileItem[]
    mainAttachmentsFile: File
    uploader: FileUploader
}

export class BookingStep{
    stepNumber: number
    name: string
    description: string
}