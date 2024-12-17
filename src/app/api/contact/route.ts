import { ContactForm } from "@/components/ContactForm";
import sendMail from "@/components/utils/mailer";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
    const body = await req.json() as ContactForm;
    await sendMail(process.env.MICROMARC_EMAIL!, `MicroMarc Form: ${body.name} - ${body.purpose}`,
        `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MicroMarc Website Contact Form Submission</title>
</head>
<body>
<div style="font-family:Arial, Helvetica, sans-serif; width: 100%; max-width: 600px; margin: 0 auto; padding: 1rem; border: 4px solid #000; border-radius: 0.5rem;">
    <h1 style="text-align: center; font-size: larger;">MicroMarc Website Contact Form Submission</h1>
<hr/>
    <p style="text-align: center; font-weight: bold; font-size: small;">WARNING: the following email may be unsafe. Under no circumstances should you click on any links or download any attachments unless you are certain of the sender's identity.
    </p>
    <hr/>
    <p>Name: ${body.name}</p>
    <p>Email Address: ${body.email}</p>
    <p>Company: ${body.company}</p>
    <p>Title: ${body.title}</p>
    <p>Purpose: ${body.purpose}</p>
    <hr/>
    <p>${body.message}</p>
<div>
</body>
</html>
`
    );
    return NextResponse.json({
        message: "Email sent successfully! Please look forward to a response from our team.",
    }, { status: 201 });
};
