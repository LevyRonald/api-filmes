import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsDate, IsDateString, IsEmpty, IsNumber, IsObject, IsString } from "class-validator"

export class CreateMovieDto {
    @IsString()
    @ApiProperty()
    plot: string

    @IsArray()
    @ApiProperty()
    genres: Array<string>

    @IsNumber()
    @ApiProperty()
    runtime: number

    @IsArray()
    @ApiProperty()
    cast: Array<string>

    @IsString()
    @ApiProperty()
    poster: string

    @IsString()
    @ApiProperty()
    title: string

    @IsString()
    @ApiProperty()
    fullplot: string

    @IsArray()
    @ApiProperty()
    languages: Array<string>

    @IsDateString()
    @ApiProperty()
    released: Date

    @IsArray()
    @ApiProperty()
    directors: Array<string>

    @IsString()
    @ApiProperty()
    rated: string

    @IsObject()
    @ApiProperty()
    awards: Object

    @IsDateString()
    @ApiProperty()
    lastupdated: Date

    @IsNumber()
    @ApiProperty()
    year: number

    @IsObject()
    @ApiProperty()
    imdb: object

    @IsArray()
    @ApiProperty()
    countries: Array<string>

    @IsString()
    @ApiProperty()
    type: string

    @IsObject()
    @ApiProperty()
    tomatoes: Object
}
