import { UserDomicilio } from './user-domicilio';

export interface Usuario {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  fecha_nacimiento: string;
  edad: number;
  user_domicilio: UserDomicilio;
}
