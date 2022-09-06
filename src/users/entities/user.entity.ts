import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

@Schema({ versionKey: false })
@ApiTags('users')
export class User {
    _id?: string;

    @Prop()
    @ApiProperty()
    name: string;

    @Prop()
    @ApiProperty()
    email: string;

    @Prop()
    @ApiProperty()
    password?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);