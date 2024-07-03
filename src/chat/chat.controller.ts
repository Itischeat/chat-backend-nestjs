import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { Chat } from './schemas/chat.schema';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('/create')
  async create(@Body() payload: Chat): Promise<void> {
    await this.chatService.createChat(payload);
  }
}
