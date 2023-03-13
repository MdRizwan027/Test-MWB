import React, { useState } from 'react';
import { AuthenticationLayout } from "@/components/layouts";
import { LoginForm, OtpForm, OtpSuccess } from "@/components/molecules/Login";

const Login = () => {
  const [isOtpVerification, setIsOtpVerification] = useState<boolean>(false);
  const [otpSuccess, setOtpSuccess] = useState<boolean>(false);

  return (
    <div>
      <AuthenticationLayout>
        {!isOtpVerification ? (
          <LoginForm
            onSuccess={() => setIsOtpVerification(true)}
          />
        ) : (
          <>
            {!otpSuccess ?
              <OtpForm
                onGoBack={() => setIsOtpVerification(false)}
                onSuccess={() => setOtpSuccess(true)}
              /> :
              <OtpSuccess />
            }
          </>
        )}
      </AuthenticationLayout>
    </div>
  );
};

export default Login;
