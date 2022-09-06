import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Theaters } from "../interfaces/theater.interface";

@Schema({ versionKey: false })
@ApiTags('theaters')
export class Theater {
    @Prop({ type: Object})
    @ApiProperty()
    location: Theaters

    @Prop()
    @ApiProperty()
    theaterId: number
}

export const theatersSchema = SchemaFactory.createForClass(Theater);
