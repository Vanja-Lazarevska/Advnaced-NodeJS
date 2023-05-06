import { CanActivate, ExecutionContext, Inject, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { key } from "src/decorator/roles.decorator";
import { Role } from "src/interface/role.enum";

@Injectable()
export class RoleGuard implements CanActivate {
    
    constructor(private reflector: Reflector){}
    canActivate(context: ExecutionContext): boolean {

        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(key, [
            context.getHandler(),
            context.getClass()
        ])

        console.log('ROLES IN ENDPOINT',requiredRoles)

        if(!requiredRoles){
            return true
        }

        const request = context.switchToHttp().getRequest<Request>()
        console.log(request.user)
        return requiredRoles.some((role) => request.user['role'].includes(role))


        

}

}