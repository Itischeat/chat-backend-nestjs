import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Chat } from './schemas/chat.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<Chat>,
  ) {}

  async sendMessage(chat: Chat) {
    console.log(chat);
    const createdChat = new this.chatModel(chat);
    return await createdChat.save();
  }
}
