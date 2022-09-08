import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiTags } from "@nestjs/swagger";

@Schema({ versionKey: false })
@ApiTags('users')
export class User {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    password?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);