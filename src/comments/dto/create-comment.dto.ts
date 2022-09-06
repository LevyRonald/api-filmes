import { IsDateString, IsEmail, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class CreateCommentDto {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsString()
    movie_id: ObjectId

    @IsString()
    text: string

    @IsDateString()
    date: Date
}
