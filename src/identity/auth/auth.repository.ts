import { UserEntity } from '../../data-base/entities/identity/user-entity.entity';
import { Repository, EntityRepository, getConnection } from 'typeorm';
import { SignupDto } from './dto';
import { genSalt, hash } from 'bcryptjs';

@EntityRepository(UserEntity)
export class AuthRepository extends Repository<UserEntity> {
  async signup(signupDto: SignupDto) {
    const { username, email, password } = signupDto;
    const user = new UserEntity();
    user.username = username;
    user.email = email;

    const salt = await genSalt(10);
    user.password = await hash(password, salt);

    await user.save();
  }
}
