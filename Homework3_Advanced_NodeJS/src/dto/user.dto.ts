import { IsNotEmpty } from "class-validator";
import { Role } from "src/interface/role.enum";

export class UserDto {

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    role: Role
}