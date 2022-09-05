import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import * as mongoose from 'mongoose'
import { ObjectId } from "mongoose";
import { Movie } from "src/movies/entities/movie.entity";

@Schema({ versionKey: false })
@ApiTags()
export class Comment {
    @Prop()
    @ApiProperty()
    name: string

    @Prop()
    @ApiProperty()
    email: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
    @ApiProperty()
    movie_id: string 

    @Prop()
    @ApiProperty()
    text: string
    
    @Prop()
    @ApiProperty()
    date: Date
}
export const moviesSchema = SchemaFactory.createForClass(Comment)