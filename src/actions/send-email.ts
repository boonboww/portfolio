'use server';

import { TFormSchema } from '@/lib/form-schema';

export const sendEmailAction = async ({ email, message }: TFormSchema) => {
  try {
    // Thay thế bằng ACCESS_KEY thật của bạn (sau khi tạo form trên web3forms.com)
    const WEB3FORM_ACCESS_KEY = process.env.WEB3FORM_ACCESS_KEY;

    if (!WEB3FORM_ACCESS_KEY) {
      throw new Error('Missing Web3Forms access key.');
    }

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORM_ACCESS_KEY,
        subject: 'New message from contact form',
        from_name: email,
        email,
        message,
      }),
    });

    const data = await res.json();

    if (data.success) {
      return { data: 'Email sent successfully!' };
    }

    return { error: data.message || 'Something went wrong!' };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to send message.' };
  }
};
