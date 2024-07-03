import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Chat } from './schemas/chat.schema';
import { ChatService } from './chat.service';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  // @SubscribeMessage('create/chat')
  // async handleCreate(client: Socket, payload: Chat): Promise<void> {
  //   await this.chatService.createChat(payload);
  // }
}
