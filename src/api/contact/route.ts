import { sendEmail } from "@/helper/mailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const { name, email, phone, country, company, reason, message } =
      reqBody;

    await sendEmail({
      name: name,
      email: email,
      phone: phone,
      country: country,
      company: company,
      reason: reason,
      message: message,
    });
    return NextResponse.json({
      message: "Message Sent",
      success: true,
    });
  } catch (error) {
    // return NextResponse.json({ error: error.message }, { status: 500 });
    console.log(error)
  }
}