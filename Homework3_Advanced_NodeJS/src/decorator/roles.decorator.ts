import { SetMetadata } from "@nestjs/common/decorators";
import { Role } from "src/interface/role.enum";

export const key = 'role'
export const Roles = (...role: Role[]) => SetMetadata(key, role)

