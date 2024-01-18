import { UserRole } from '../enum/user-roles.enum';

interface MenuAccessRolesInterface {
  [key: string]: UserRole[];
}

export const MenuAccessRoles: MenuAccessRolesInterface = {
  // Add here modules and roles that can access this specific module
  users: [UserRole.ADMIN],
};
