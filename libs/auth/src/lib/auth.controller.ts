import { PrismaService } from '@nest-i18n-test/prisma';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.guard';
import { Request } from './request.interface';

@Controller('auth')
export class AuthController {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService
  ) {}

  @Post('register')
  async register(@Body() data: { email: string; password: string }) {
    const { email, password } = data;
    return this.authService.register(email, password);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() request: Request) {
    console.log(request);
    const { user } = request;
    const {
      accessToken,
      accessCookie,
    } = this.authService.getCookieAndAccessToken(user.id);
    request.res.setHeader('Set-Cookie', [accessCookie]);

    return this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        accessToken,
      },
    });
  }
}
