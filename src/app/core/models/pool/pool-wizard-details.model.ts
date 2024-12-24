import { AmenityLookupDto } from "../../dtos"

export class PoolWizardDetails{
    name: string
    description: string
    address: string
    specialAccessInstructions: string
    amenities: AmenityLookupDto[]
    additionalAmenities: string
}