import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dto/user.dto';
import * as bcrypt from 'bcrypt'
import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService){}

    async validateUser(username:string, password: string){
        const user =await this.usersService.findOne(username)

        if(!user){
            throw new NotFoundException(`User with username: ${username} was not found`)
        }
        const passwordCorrect = bcrypt.compareSync(password, user.password)
        
        if(user && passwordCorrect){
            const { password, ...propertiesOfUser } = user
            return {
                ...propertiesOfUser
            }
        }
        return null
    }

    async login(userSent: User){
        const payload = {username: userSent.username, sub: userSent.id, role: userSent.role} 
        return {
            access_token: this.jwtService.sign(payload)
        }
        
    }

    async registerUserInDb(userDto: UserDto){

        const newUser = {
            username: userDto.username,
            password: bcrypt.hashSync(userDto.password, 10),
            role: userDto.role
        }

      const id = await this.usersService.registerUser(newUser)
        return id
    }



}
