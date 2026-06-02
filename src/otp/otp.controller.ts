import { Body, Controller, Post } from '@nestjs/common';
import { OtpService } from './otp.service';
import * as OtpTypes from './otp.types';

@Controller('otp')
export class OtpController {
  constructor(private readonly otpService: OtpService) {}

  @Post('get')
  requestOtp(
    @Body() payload: OtpTypes.RequestOtpPayload,
  ): Promise<OtpTypes.RequestOtpResponse> {
    return this.otpService.requestOtp(payload);
  }

  @Post('verify')
  verifyOtp(
    @Body() payload: OtpTypes.VerifyOtpPayload,
  ): Promise<OtpTypes.VerifyOtpResponse> {
    return this.otpService.verifyOtp(payload);
  }
}
