import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

@Schema({ versionKey: false })
@ApiTags('movies')
export class Movie {
    @Prop()
    @ApiProperty()
    plot: string

    @Prop()
    @ApiProperty()
    genres: Array<string>

    @Prop()
    @ApiProperty()
    runtime: number

    @Prop()
    @ApiProperty()
    cast: Array<string>

    @Prop()
    @ApiProperty()
    poster: string

    @Prop()
    @ApiProperty()
    title: string

    @Prop()
    @ApiProperty()
    fullplot: string

    @Prop()
    @ApiProperty()
    languages: Array<string>

    @Prop()
    @ApiProperty()
    released: Date

    @Prop()
    @ApiProperty()
    directors: Array<string>

    @Prop()
    @ApiProperty()
    rated: string

    @Prop({ type: Object })
    @ApiProperty()
    awards: any

    @Prop()
    @ApiProperty()
    lastupdated: Date

    @Prop()
    @ApiProperty()
    year: number

    @Prop({ type: Object })
    @ApiProperty()
    imdb: any

    @Prop()
    @ApiProperty()
    countries: Array<string>

    @Prop()
    @ApiProperty()
    type: string

    @Prop({ type: Object })
    @ApiProperty()
    tomatoes: any
}
export const moviesSchema = SchemaFactory.createForClass(Movie);
