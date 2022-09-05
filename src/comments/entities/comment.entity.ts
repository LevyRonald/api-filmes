import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

@Schema({ versionKey: false })
@ApiTags()
export class Comment {
    @Prop()
    @ApiProperty()
    name: string

    @Prop()
    @ApiProperty()
    email: string

    @Prop()
    @ApiProperty()
    movie_id: number

    @Prop()
    @ApiProperty()
    text: string
    
    @Prop()
    @ApiProperty()
    date: Date
}
export const moviesSchema = SchemaFactory.createForClass(Comment)