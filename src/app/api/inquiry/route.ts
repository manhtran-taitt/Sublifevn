import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, role, company, area, email, phone, country, interest, content, formType } = data;

    const submittedAt = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    const finalFormType = formType || "Yêu cầu báo giá";

    // Log submitted lead details
    console.log("=== NEW SUBLIME INQUIRY SUBMISSION ===");
    console.log(`Form Type: ${finalFormType}`);
    console.log(`Customer Name: ${name}`);
    console.log(`Role: ${role}`);
    console.log(`Phone/Zalo: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Company/Area: ${company || area || 'N/A'}`);
    console.log(`Country/Region: ${country}`);
    console.log(`Interest: ${interest}`);
    console.log(`Content: ${content}`);
    console.log(`Submitted At: ${submittedAt}`);
    console.log("======================================");

    // 1. Forward lead payload directly to n8n Webhook
    try {
      await fetch("https://n8n.thachanhitt.com/webhook/landingpage-sublime-thach-anh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: finalFormType,
          name,
          role,
          phone,
          email,
          company: company || area || "N/A",
          country,
          interest,
          content,
          submittedAt,
        }),
      });
    } catch (err) {
      console.error("n8n Webhook Error:", err);
    }

    // 2. Backup forward to Web3Forms free email dispatch endpoint targeting manhtranwork19@gmail.com
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f7a3717e-c80b-4db4-90ef-8e7c5364177d",
          subject: `[${finalFormType.toUpperCase()}] từ ${name}`,
          from_name: "SUBLIME Landing Page",
          to_email: "manhtranwork19@gmail.com",
          formType: finalFormType,
          name,
          role,
          phone,
          email,
          company: company || area || "N/A",
          country,
          interest,
          content,
          submittedAt,
        }),
      });
    } catch (err) {
      // Ignore background dispatch errors
    }

    return NextResponse.json(
      {
        success: true,
        message: "Yêu cầu báo giá đã được chuyển đến n8n Webhook và manhtranwork19@gmail.com",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Lỗi hệ thống khi xử lý yêu cầu" },
      { status: 500 }
    );
  }
}
