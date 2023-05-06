import { Role } from "src/interface/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user_entity')
export class User {

    @PrimaryGeneratedColumn()
    id:string;

    @Column({type: 'varchar'})
    username: string;

    @Column({type: 'varchar'})
    password: string;

    @Column()
    role: Role
}
