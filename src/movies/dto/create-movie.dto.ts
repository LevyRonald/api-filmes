import { IsArray, IsDate, IsDateString, IsEmpty, IsNumber, IsObject, IsString } from "class-validator"

export class CreateMovieDto {
    @IsString()
    plot: string

    @IsArray()
    genres: Array<string>

    @IsNumber()
    runtime: number

    @IsArray()
    cast: Array<string>

    @IsString()
    poster: string

    @IsString()
    title: string

    @IsString()
    fullplot: string

    @IsArray()
    languages: Array<string>

    @IsDateString()
    released: Date

    @IsArray()
    directors: Array<string>

    @IsString()
    rated: string

    @IsObject()
    awards: Object

    @IsDateString()
    lastupdated: Date

    @IsNumber()
    year: number

    @IsObject()
    imdb: object

    @IsArray()
    countries: Array<string>

    @IsString()
    type: string

    @IsObject()
    tomatoes: Object
}
