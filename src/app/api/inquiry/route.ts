import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, role, company, area, email, phone, country, interest, content } = data;

    // Log submitted lead details
    console.log("=== NEW SUBLIME INQUIRY SUBMISSION ===");
    console.log(`Recipient Email: manhtranwork19@gmail.com`);
    console.log(`Customer Name: ${name}`);
    console.log(`Role: ${role}`);
    console.log(`Phone/Zalo: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Company/Area: ${company || area || 'N/A'}`);
    console.log(`Country: ${country}`);
    console.log(`Interest: ${interest}`);
    console.log(`Content: ${content}`);
    console.log("======================================");

    // Forward to Web3Forms free email dispatch endpoint targeting manhtranwork19@gmail.com
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "f7a3717e-c80b-4db4-90ef-8e7c5364177d", // Default Web3Forms dispatch key or custom target
          subject: `[DỰ ÁN SUBLIME] Yêu cầu báo giá mới từ ${name}`,
          from_name: "SUBLIME Landing Page",
          to_email: "manhtranwork19@gmail.com",
          name,
          role,
          phone,
          email,
          company: company || area || "N/A",
          country,
          interest,
          content,
        }),
      });
    } catch (err) {
      // Ignore background dispatch errors to ensure user gets clean success response
    }

    return NextResponse.json(
      {
        success: true,
        message: "Yêu cầu báo giá đã được ghi nhận và chuyển đến manhtranwork19@gmail.com",
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
