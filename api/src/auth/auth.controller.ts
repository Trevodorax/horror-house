import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { z } from 'zod';

const ResetPasswordSchema = z.object({
  passwordResetCode: z.string(),
  newPassword: z.string().min(8),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

interface AuthResponse {
  token: string;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(
    @Body() body: z.infer<typeof LoginSchema>,
  ): Promise<AuthResponse> {
    const validBody = LoginSchema.parse(body);

    const token = await this.authService.login({
      email: validBody.email,
      password: validBody.password,
    });

    return { token };
  }
}
