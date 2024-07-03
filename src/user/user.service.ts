import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { connectDto } from './dto/connect.dto';
import { UserChats } from './schemas/user-chat.schema';
import { Chat } from 'src/chat/schemas/chat.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(UserChats.name)
    private readonly userChatsModel: Model<UserChats>,
    @InjectModel(Chat.name) private readonly chatModel: Model<Chat>,
  ) {}

  async createUser(payload: User) {
    console.log(payload);
    const createdUser = new this.userModel(payload);
    await createdUser.save();
  }

  async connect(payload: connectDto) {
    const user = await this.userModel.findOne({ user_name: payload.user_name });
    const chat = await this.chatModel.findOne({ name: payload.chat_name });
    const connected = new this.userChatsModel({
      user_id: user._id,
      chat_id: chat._id,
    });
    await connected.save();
  }
}
