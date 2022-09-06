import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import * as mongoose from 'mongoose'
import { ObjectId } from "mongoose";
import { Movie } from "src/movies/entities/movie.entity";

@Schema({ versionKey: false })
@ApiTags()
export class Comment {
    @Prop()
    name: string

    @Prop()
    email: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
    movie_id: string 

    @Prop()
    text: string
    
    @Prop()
    date: Date
}
export const moviesSchema = SchemaFactory.createForClass(Comment)