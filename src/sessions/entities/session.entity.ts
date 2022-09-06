import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import * as mongoose from 'mongoose'

@Schema({ versionKey: false })
@ApiTags('sessions')
export class Session {

    @Prop({ type: mongoose.Schema.Types.String, ref: 'User' })
    @ApiProperty()
    user_id: string

    @Prop()
    @ApiProperty()
    jwt: string
}
export const SessionsSchema = SchemaFactory.createForClass(Session);
