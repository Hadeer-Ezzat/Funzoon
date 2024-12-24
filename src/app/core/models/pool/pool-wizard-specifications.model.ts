export class PoolWizardSpecifications{
    area: Area
    depth: Depth
    pricePerHour: number
    isChargableForAdditionalGuests: boolean
    maxCapacity: number
    isAllowChildren: boolean
    isAllowInfants: boolean 
}

export class Area{
    length: number
    width: number
}

export class Depth{
    shallowestPoint: number
    deepestPoint: number
}