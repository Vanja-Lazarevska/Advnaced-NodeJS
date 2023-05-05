import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {

    users: User[] = [
        {
            id: '1',
            username: "bob_boski",
            password: 'bboobb',
            age: 33
        },
        {
            id: '2',
            username: "john_doe",
            password: 'ddooee',
            age: 27
        },
        {
            id: '3',
            username: "ana_smith",
            password: 'ssmmiitthh',
            age: 37
        }
    ]

    findOne(username: string) {
        const userFound = this.users.find(user => user.username === username)

        return userFound

    }
}
