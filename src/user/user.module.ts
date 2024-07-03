import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserGateway } from './user.gateway';
import { UserChats, UserChatsSchema } from './schemas/user-chat.schema';
import { ChatModule } from 'src/chat/chat.module';
import { Chat, ChatSchema } from 'src/chat/schemas/chat.schema';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UserChats.name, schema: UserChatsSchema },
      { name: Chat.name, schema: ChatSchema },
    ]),
    ChatModule,
  ],
  providers: [UserService, UserGateway],
  controllers: [UserController],
})
export class UserModule {}
