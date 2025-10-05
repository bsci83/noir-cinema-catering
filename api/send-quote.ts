import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      eventDate,
      crewSize,
      location,
      services,
      dietaryNeeds,
      budget,
      message
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !projectType || !eventDate || !crewSize || !location) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Format the email content
    const emailHtml = `
      <h2>New Quote Request from NOIR Cinema Catering Website</h2>

      <h3>Contact Information</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Company:</strong> ${company || 'Not provided'}</li>
      </ul>

      <h3>Project Details</h3>
      <ul>
        <li><strong>Project Type:</strong> ${projectType}</li>
        <li><strong>Event Date:</strong> ${eventDate}</li>
        <li><strong>Crew Size:</strong> ${crewSize}</li>
        <li><strong>Location:</strong> ${location}</li>
        <li><strong>Budget Range:</strong> ${budget || 'Not specified'}</li>
      </ul>

      <h3>Services Needed</h3>
      <p>${services && services.length > 0 ? services.join(', ') : 'None selected'}</p>

      <h3>Dietary Requirements</h3>
      <p>${dietaryNeeds || 'None specified'}</p>

      <h3>Additional Details</h3>
      <p>${message || 'None provided'}</p>

      <hr>
      <p style="color: #666; font-size: 12px;">
        This email was sent from the NOIR Cinema Catering website contact form.
      </p>
    `;

    // Send email via Resend
    // Add multiple recipients here - you can add more email addresses to this array
    const data = await resend.emails.send({
      from: 'NOIR Cinema Catering <onboarding@resend.dev>',
      to: [
        'christina@cinema-catering.com',
        'Christina@galacateringservice.com'
        // Add more recipients here as needed, separated by commas
      ],
      replyTo: email,
      subject: `Quote Request - ${projectType} - ${eventDate}`,
      html: emailHtml,
    });

    return res.status(200).json({
      success: true,
      messageId: data.data?.id
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
