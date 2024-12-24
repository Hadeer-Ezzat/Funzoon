import { FileItem } from "ng2-file-upload"
import { 
PoolWizardDetails,
PoolWizardPrivacy,
PoolWizardSpecifications,
WizardAttachments,
WizardCalender,
WizardPayment} from "src/app/core/models"
import { PoolAmenityDto, PoolDto, PoolImageDto, PoolRuleDto } from "../../dtos"

export class PoolWizard{
    poolWizardDetails:          PoolWizardDetails
    poolWizardPrivacy:          PoolWizardPrivacy
    poolWizardSpecifications:   PoolWizardSpecifications
    poolWizardAttachment:       WizardAttachments
    poolWizardCalender:         WizardCalender
    poolWizardPayment:          WizardPayment

    isAllWizardModelsExist(): boolean{
        if (this.poolWizardDetails && 
            this.poolWizardPrivacy &&
            this.poolWizardSpecifications &&
            this.poolWizardAttachment &&
            this.poolWizardCalender &&
            this.poolWizardPayment){
            return true
        }
        return false
    }

    getAsPoolDto(): PoolDto{
        const poolDto: PoolDto = {

            // Back-End
            id: 0,
            changingOrRestRoom: false,

            // Details
            address:                    this.poolWizardDetails.address,
            specialAccessInstructions:  this.poolWizardDetails.specialAccessInstructions,
            nameEn:                     this.poolWizardDetails.name,
            descriptionEn:              this.poolWizardDetails.description,
            poolAmenities:              this.getSelectedAmenitiesAsPoolAmenitiesDto(),
            additionalAmenities:        this.poolWizardDetails.additionalAmenities,

            // Specifications
            length:                     this.poolWizardSpecifications.area.length,
            width:                      this.poolWizardSpecifications.area.width,
            shalloestPoint:             this.poolWizardSpecifications.depth.shallowestPoint,
            deepestPoint:               this.poolWizardSpecifications.depth.deepestPoint,
            chargePrice:                this.poolWizardSpecifications.pricePerHour,
            isAnAdditionalFee:          true,//this.poolWizardSpecifications.isChargableForAdditionalGuests,
            areChildrenAllowed:         true,//this.poolWizardSpecifications.isAllowChildren,
            areInfantsAllowed:          true,//this.poolWizardSpecifications.isAllowInfants,
            maxCapcity:                 this.poolWizardSpecifications.maxCapacity,

            // Privacy
            privacyId:                  this.poolWizardPrivacy.privacyLevel,
            poolRules:                  this.getSelectedRulesAsPoolRulesDto(),
            additonalRules:             this.poolWizardPrivacy.additionalRules,
            cancellationPolicyId:       this.poolWizardPrivacy.cancelationPolicy,

            // Attachments
            coverImg:               this.poolWizardAttachment.mainAttachmentsFile?.name,
            poolImgs:                   this.getChosenAttachmentsAsPoolImagesDto(),
            // advanceNotice:           this.poolWizardAttachment.advanceNotice,
            // availabilityWindow:      this.poolWizardAttachment.availabilityWindow,

        }

        return poolDto
    }

    getSelectedAmenitiesAsPoolAmenitiesDto(): PoolAmenityDto[]{
        var poolAmenities: PoolAmenityDto[] = []

        for (let index = 0; index < this.poolWizardDetails.amenities.length; index++) {
            const amenityLookupDto = this.poolWizardDetails.amenities[index];
            const _poolAmenityDto = new PoolAmenityDto()
            _poolAmenityDto.amenityId = amenityLookupDto.id
            poolAmenities.push(_poolAmenityDto)
        }
        return poolAmenities
    }

    getSelectedRulesAsPoolRulesDto(): PoolRuleDto[]{
        var poolRules: PoolRuleDto[] = []

        for (let index = 0; index < this.poolWizardPrivacy.rules.length; index++) {
            const ruleLookupId = this.poolWizardPrivacy.rules[index];
            const _poolRuleDto = new PoolRuleDto()
            _poolRuleDto.ruleId = ruleLookupId
            poolRules.push(_poolRuleDto)
        }
        return poolRules
    }

    getChosenAttachmentsAsPoolImagesDto(): PoolImageDto[]{
        var poolImages: PoolImageDto[] = []

        for (let index = 0; index < this.poolWizardAttachment.attachmentsFiles.length; index++) {
            const attachmentFile = this.poolWizardAttachment.attachmentsFiles[index];
            const _poolImageDto = new PoolImageDto()
            _poolImageDto.image = attachmentFile._file.name
            poolImages.push(_poolImageDto)
        }
        return poolImages
    }

    uploadAdditionalAttachments(placeId: number){
        if(this.poolWizardAttachment.uploader){
            this.poolWizardAttachment.uploader.onBeforeUploadItem = (item: FileItem) => {
                this.poolWizardAttachment.uploader.options.additionalParameter = {
                    placeId: placeId,
                };
            };
            this.poolWizardAttachment.uploader.uploadAll()
        }
    }

    getCoverImageFormData(placeId: number): FormData{
        const formData = new FormData()
        formData.append('attachment', this.poolWizardAttachment.mainAttachmentsFile)
        formData.append('placeId', placeId.toString())
        return formData
    }
}