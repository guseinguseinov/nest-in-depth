import { Body, Controller, Get, Post, Param, Query, UsePipes, ValidationPipe, ParseIntPipe, ParseBoolPipe, UseGuards, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dto/UpdateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';


@Controller('users')
// @UseGuards(AuthGuard) for a whole guard
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    getUsers() {
        return this.userService.findUsers();
    }

    // dto - data transfer object 
    @Post('create')
    createUser(@Body() userData: CreateUserDto) {
        return this.userService.createUser(userData);
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.fetchUserById(id);
    }


    @Patch(':id')
    async updateUserById(@Param("id", ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return await this.userService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUserById(@Param("id") id: number) {
        return await this.userService.deleteUser(id);
    }

}
