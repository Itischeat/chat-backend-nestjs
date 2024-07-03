import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema()
export class Chat {
  @Prop({
    required: true,
    type: String,
    unique: true,
  })
  name: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
