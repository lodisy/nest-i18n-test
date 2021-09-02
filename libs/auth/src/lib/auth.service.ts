import { PrismaService } from '@nest-i18n-test/prisma';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  private generateAccessToken(payload: { userId: string }): string {
    return this.jwtService.sign(payload);
  }

  getCookieAndAccessToken(userId: string) {
    const token = this.generateAccessToken({ userId });
    const cookie = `Access=${token}; HttpOnly; Path=/; Max-Age="6d"`;
    return {
      accessToken: token,
      accessCookie: cookie,
    };
  }

  // check password if matches, return user if matches
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        password: true,
      },
    });

    if (user) {
      const isMatch = password === user.password;
      if (!isMatch)
        throw new HttpException(
          {
            key: 'auth.USER_CREDENTIALS_WRONG',
          },
          HttpStatus.UNAUTHORIZED
        );
      return await this.prisma.user.findUnique({
        where: {
          id: user.id,
        },
      });
    }
    return null;
  }

  // register

  async register(email: string, password: string) {
    const isExisting = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (isExisting)
      throw new HttpException(
        {
          key: 'auth.USER_ALREADY_EXISTS_EMAIL',
          args: {
            email,
          },
        },
        HttpStatus.CONFLICT
      );

    return await this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }
}
