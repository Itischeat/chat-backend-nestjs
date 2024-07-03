import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class UserGateway {
  constructor(private userService: UserService) {}

  @SubscribeMessage('create/user')
  async handleMessage(client: Socket, payload: User): Promise<void> {
    await this.userService.createUser(payload);
  }
}
