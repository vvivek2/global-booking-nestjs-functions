import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OtpService {
  private JAVA_URL = 'http://localhost:8080';

  async requestOtp(payload: any) {
    const res = await axios.post(
      `${this.JAVA_URL}/otp/get`,
      payload,
    );

    return res.data;
  }

  async verifyOtp(payload: any) {
    const res = await axios.post(
      `${this.JAVA_URL}/otp/verify`,
      payload,
    );

    return res.data;
  }
}