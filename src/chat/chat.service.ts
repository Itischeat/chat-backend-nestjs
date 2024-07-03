import {
  BadRequestException,
  Injectable,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Chat } from './schemas/chat.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<Chat>,
  ) {}

  async sendMessage(chat: Chat) {
    if (!(typeof chat.name === 'string' && isNaN(+chat.name))) {
      throw new BadRequestException('Имя дожно быть строкой');
    }
    if (typeof chat === 'string') {
      throw new UnsupportedMediaTypeException(
        'Входная информация должна быть в JSON формате',
      );
    }
    const createdChat = new this.chatModel(chat);
    await createdChat.save();
  }
}
