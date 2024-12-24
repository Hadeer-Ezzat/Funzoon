export class FindPoolMoreDetailsDto{
    id: number
    changingOrRestRoom: boolean
    address: string
    specialAccessInstructions: string
    nameEn: string
    descriptionEn: string
    amenities: string[]
    additionalAmenities: string
    length: number
    width: number
    shalloestPoint: number
    deepestPoint: number
    chargePrice: number
    isAnAdditionalFee: true
    areChildrenAllowed: false
    areInfantsAllowed: true
    maxCapcity: number
    privacyDescription: string
    rules: string[]
    additonalRules: string
    cancellationPolicyId: number
    poolImgs: string[]
    poolAgent: FindPoolMoreDetailsAgentDto
    poolReviews: FindPoolMoreDetailsReviewDto[]
  }

export class FindPoolMoreDetailsAgentDto{
    fullName: string
    profileImg: string
    bio: string
}

export class FindPoolMoreDetailsReviewDto{
    reviewerFullName: string
    reviewerProfileImg: string
    datePosted: string
    rate: number
    comment: string
}