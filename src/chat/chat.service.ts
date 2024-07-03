import { Injectable } from '@nestjs/common';
<<<<<<< HEAD
import { Model } from 'mongoose';
import { Chat } from './schemas/chat.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}
}
=======

@Injectable()
export class ChatService {}
>>>>>>> a6787e9f1e8ce9bbc9334047afc1a69d79e7c2cc
