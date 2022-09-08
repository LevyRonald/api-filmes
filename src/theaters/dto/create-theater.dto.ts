import { ApiProperty } from "@nestjs/swagger"
import { IsEmpty, IsObject } from "class-validator"

export class CreateTheaterDto {
    @IsEmpty()
    @ApiProperty()
    theatherId: number

    @IsObject()
    @ApiProperty()
    location: object
}
