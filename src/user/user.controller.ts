import { Body, Controller, Post } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { connectDto } from './dto/connect.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async createUser(@Body() payload: User): Promise<void> {
    await this.userService.createUser(payload);
  }

  @Post('/connect')
  async connect(@Body() payload: connectDto): Promise<void> {
    await this.userService.connect(payload);
  }
}
