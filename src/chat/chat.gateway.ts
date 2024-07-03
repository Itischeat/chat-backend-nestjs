import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { Chat } from './schemas/chat.schema';

@WebSocketGateway() // server: Server;
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: Chat): string {
    return 'Hello world!';
  }
}
