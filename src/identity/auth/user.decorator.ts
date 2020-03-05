import { createParamDecorator } from '@nestjs/common';
import { User } from '../user/dtos/user';

export const GetUser = createParamDecorator(
  (data, req): User => {
    return req.user;
  },
);
