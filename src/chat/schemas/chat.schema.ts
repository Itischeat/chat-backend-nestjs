import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  name: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
