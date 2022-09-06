import { IsEmpty, IsObject } from "class-validator"

export class CreateTheaterDto {
    @IsEmpty()
    theatherId: number

    @IsObject()
    location: object
}
