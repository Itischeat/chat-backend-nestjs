import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
<<<<<<< HEAD
import { ChatGateway } from './chat.gateway';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './schemas/chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  providers: [ChatService, ChatGateway],
=======

@Module({
  providers: [ChatService]
>>>>>>> a6787e9f1e8ce9bbc9334047afc1a69d79e7c2cc
})
export class ChatModule {}
