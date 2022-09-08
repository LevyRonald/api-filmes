import { ApiProperty } from "@nestjs/swagger"
import { IsDateString, IsEmail, IsString } from "class-validator"
export class CreateCommentDto {
    @IsString()
    @ApiProperty()
    name: string

    @IsEmail()
    @ApiProperty()
    email: string

    @IsString()
    @ApiProperty()
    movie_id: string

    @IsString()
    @ApiProperty()
    text: string

    @IsDateString()
    @ApiProperty()
    date: Date
}
