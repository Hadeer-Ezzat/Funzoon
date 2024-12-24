import { AmenityLookupDto, PoolAmenityDto, PoolImageDto, PoolRuleDto, PrivacyDto } from "../../dtos"

export interface PoolDto {
    id: number
    address: string
    specialAccessInstructions: string
    nameEn: string
    descriptionEn: string
    additionalAmenities: string
    changingOrRestRoom: boolean
    length: number
    width: number
    shalloestPoint: number
    deepestPoint: number
    chargePrice: number
    isAnAdditionalFee: boolean
    maxCapcity: number
    areChildrenAllowed: boolean
    areInfantsAllowed: boolean
    additonalRules: string
    coverImg: string
    poolImgs: PoolImageDto[]
    privacyId: number
    cancellationPolicyId: number
    poolAmenities: PoolAmenityDto[]
    poolRules: PoolRuleDto[]
}