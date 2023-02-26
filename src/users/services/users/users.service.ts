import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Injectable()
export class UsersService {
    private fakeUsers = [
        { username: 'Gusein', email: "gusein.guseinov2002@gmail.com" },
        { username: 'Soltan', email: "Soltan@gmail.com" },
    ]

    fetchUsers() {
        return this.fakeUsers;
    }

    createUser(userDetails: CreateUserDto) {
        this.fakeUsers.push(userDetails);
        return;
    }

    fetchUserById(id: number) {
        return this.fakeUsers[id];
    }
}
