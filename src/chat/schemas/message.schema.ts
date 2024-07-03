import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({ type: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
  })
  user_id: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Chat',
  })
  chat_id: Types.ObjectId;

  @Prop({
    type: String,
  })
  text: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
