export type RequestOtpResponse = {
  message?: string;
  requestId?: string;
  [key: string]: any;
};

export type RequestOtpPayload = {
  countryCode: string;
  mobileNumber: string;
};

export type VerifyOtpPayload = RequestOtpPayload & {
  otp: string;
};

export type VerifyOtpResponse = {
  message: string;
  [key: string]: any;
};
