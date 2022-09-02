import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

@Schema({ versionKey: false })
@ApiTags('theaters')
export class Theater {
    @Prop({ type: Object})
    @ApiProperty()
    location: any

    @Prop()
    @ApiProperty()
    theaterId: number
}

export const theatersSchema = SchemaFactory.createForClass(Theater);
