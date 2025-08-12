import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { name, email, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                error: 'All fields are required',
                success: false 
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Please enter a valid email address',
                success: false 
            });
        }

        // Check if Resend API key is configured
        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY environment variable is not set');
            return res.status(500).json({
                error: 'Email service not configured. Please try again later.',
                success: false
            });
        }

        // Send email using Resend
        const emailData = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // This is Resend's default sender for testing
            to: ['shazeb.wani@gmail.com'], // Your email address
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
                <hr>
                <p><em>Sent from your portfolio website at ${new Date().toLocaleString()}</em></p>
            `,
            // Also send a plain text version
            text: `
                New Contact Form Submission
                
                Name: ${name}
                Email: ${email}
                Subject: ${subject}
                
                Message:
                ${message}
                
                Sent from your portfolio website at ${new Date().toLocaleString()}
            `
        });

        // Log successful submission
        console.log('Email sent successfully:', emailData);

        return res.status(200).json({
            success: true,
            message: 'Thank you for your message! I\'ll get back to you soon.'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        
        // Check if it's a Resend API error
        if (error.name === 'ResendError') {
            return res.status(500).json({
                error: 'Email service error. Please try again later.',
                success: false
            });
        }
        
        return res.status(500).json({
            error: 'Something went wrong. Please try again.',
            success: false
        });
    }
}