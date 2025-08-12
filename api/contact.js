const { Resend } = require('resend');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: 'All fields are required', success: false });
    return;
  }

  // basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ error: 'Please enter a valid email address', success: false });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: 'Email service not configured', success: false });
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Portfolio Contact <noreply@your-domain.com>',
      to: 'shazeb.wani@gmail.com',
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`
    });

    res.status(200).json({ success: true, message: 'Thanks! Your message was sent.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Email service error. Please try again later.', success: false });
  }
};
