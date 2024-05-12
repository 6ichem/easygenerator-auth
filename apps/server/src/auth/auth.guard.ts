import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AuthenticatedGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (info?.toString().includes('No auth token') && !user) {
      throw new UnauthorizedException('Unauthorized.');
    }

    if (info?.toString().includes('jwt expired') && user) {
      throw new UnauthorizedException('Session expired, please login again.');
    }

    if (err || !user) {
      throw new UnauthorizedException('INVALID_TOKEN');
    }

    return user;
  }
}
