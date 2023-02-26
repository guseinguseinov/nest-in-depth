import { Body, Controller, Get, Post, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';


@Controller('users')
// @UseGuards(AuthGuard) for a whole guard
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Get()
    @UseGuards(AuthGuard)
    getUsers() {
        return this.userService.fetchUsers();
    }

    // dto - data transfer object 
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
        console.log(userData);
        return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        console.log(id);
        return this.userService.fetchUserById(id);
    }


}
