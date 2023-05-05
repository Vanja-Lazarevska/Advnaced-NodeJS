import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from 'src/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService){}

    async validateUser(username:string, password: string){
        const user = this.usersService.findOne(username)
        
        if(user && user.password === password){
            const { password, ...propertiesOfUser } = user
            return {
                ...propertiesOfUser
            }
        }
        return null
    }

    async login(userSent: User){
        const payload = {username: userSent.username, id: userSent.id} 
        return {
            access_token: this.jwtService.sign(payload)
        }
        
    }



}
