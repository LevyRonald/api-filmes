import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiTags } from "@nestjs/swagger";
import { Movies } from "../interfaces/movie.interface";

@Schema({ versionKey: false })
@ApiTags('movies')
export class Movie {
    @Prop()
    plot: string

    @Prop()
    genres: Array<string>

    @Prop()
    runtime: number

    @Prop()
    cast: Array<string>

    @Prop()
    poster: string

    @Prop()
    title: string

    @Prop()
    fullplot: string

    @Prop()
    languages: Array<string>

    @Prop()
    released: Date

    @Prop()
    directors: Array<string>

    @Prop()
    rated: string

    @Prop({ type: Object})
    awards: Movies['Awards']

    @Prop()
    lastupdated: Date

    @Prop()
    year: number

    @Prop({ type: Object })
    imdb: Movies['Imdb']

    @Prop()
    countries: Array<string>

    @Prop()
    type: string

    @Prop({ type: Object })
    tomatoes: Movies["Tomatoes"]
}
export const moviesSchema = SchemaFactory.createForClass(Movie);
