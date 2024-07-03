import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type UserChatsDocument = HydratedDocument<UserChats>;

@Schema()
export class UserChats {
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
}

export const UserChatsSchema = SchemaFactory.createForClass(UserChats);
