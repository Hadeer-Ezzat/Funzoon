import { UserPrivateInfoDto } from "./user-private-info.dto";
import { UserPublicInfoDto } from "./user-public-info.dto";

export class UserProfileInfoDto{
    publicInformation: UserPublicInfoDto
    privateInformation: UserPrivateInfoDto
}