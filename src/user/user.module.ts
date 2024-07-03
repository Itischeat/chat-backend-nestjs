import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserGateway } from './user.gateway';
import { UserChats, UserChatsSchema } from './schemas/user-chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: UserChats.name, schema: UserChatsSchema },
    ]),
  ],
  providers: [UserService, UserGateway],
})
export class UserModule {}
