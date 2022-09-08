import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiTags } from "@nestjs/swagger";
import { Theaters } from "../interfaces/theater.interface";

@Schema({ versionKey: false })
@ApiTags('theaters')
export class Theater {
    @Prop({ type: Object})
    location: Theaters

    @Prop()
    theaterId: number
}

export const theatersSchema = SchemaFactory.createForClass(Theater);
