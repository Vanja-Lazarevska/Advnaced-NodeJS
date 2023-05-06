import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

//     users: User[] = [
//         {
//             id: '1',
//             username: "bob_boski",
//             password: 'bboobb',
//             age: 33,
// \        },
//         {
//             id: '2',
//             username: "john_doe",
//             password: 'ddooee',
//             age: 27
//         },
//         {
//             id: '3',
//             username: "ana_smith",
//             password: 'ssmmiitthh',
//             age: 37
//         }
//     ]

    async findOne(username: string) {

        const userFound = await this.userRepository.findOneBy({username: username})

        return userFound

    }

    async registerUser(userDto: UserDto){
        const newUser = this.userRepository.create(userDto)
        const userSaved = await this.userRepository.save(newUser)

        return newUser.id


    }
}
