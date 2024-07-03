import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { Chat } from './schemas/chat.schema';

@WebSocketGateway()
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('message')
  async handleMessage(client: Socket, payload: Chat): Promise<void> {
    await this.chatService.sendMessage(payload);
  }
}
