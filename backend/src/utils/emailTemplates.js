const getBookingConfirmationTemplate = ({
  userName,
  tourTitle,
  destination,
  travelDate,
  adults,
  children,
  totalAmount,
  coverImage,
}) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background-color: #f4f7f6;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      }
      .header-img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      .content {
        padding: 40px 30px;
      }
      h1 {
        color: #2c3e50;
        font-size: 24px;
        margin-bottom: 20px;
      }
      p {
        color: #555555;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 15px;
      }
      .details-box {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 20px;
        margin: 25px 0;
        border-left: 4px solid #faa935;
      }
      .details-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      .details-row strong {
        color: #333;
      }
      .details-row span {
        color: #666;
      }
      .btn {
        display: inline-block;
        background-color: #faa935;
        color: #ffffff;
        text-decoration: none;
        padding: 14px 28px;
        border-radius: 30px;
        font-weight: bold;
        margin-top: 20px;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
      }
      .footer {
        background-color: #2c3e50;
        color: #ffffff;
        text-align: center;
        padding: 20px;
        font-size: 14px;
      }
      .footer p {
        color: #ccc;
        margin: 5px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <img src="${coverImage}" alt="${destination}" class="header-img" />
      <div class="content">
        <h1>Booking Confirmed! 🎉</h1>
        <p>Hi ${userName},</p>
        <p>Get ready for an unforgettable adventure! Your booking for <strong>${tourTitle}</strong> has been successfully confirmed. We are thrilled to have you on board.</p>
        
        <div class="details-box">
          <div class="details-row">
            <strong>Destination:</strong>
            <span>${destination}</span>
          </div>
          <div class="details-row">
            <strong>Travel Date:</strong>
            <span>${new Date(travelDate).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div class="details-row">
            <strong>Travelers:</strong>
            <span>${adults} Adults${children > 0 ? `, ${children} Children` : ''}</span>
          </div>
          <div class="details-row">
            <strong>Total Amount Paid:</strong>
            <span>$${totalAmount.toLocaleString()}</span>
          </div>
        </div>

        <p>We will send you a detailed itinerary and further instructions a few days before your departure. If you have any special requests, please don't hesitate to reach out.</p>
        
        <a href="#" class="btn">View Booking Details</a>
      </div>
      <div class="footer">
        <p>TourPro Travels &copy; ${new Date().getFullYear()}</p>
        <p>Need help? Reply to this email or call us at +1-555-TOURPRO</p>
      </div>
    </div>
  </body>
  </html>
  `;
};

module.exports = {
  getBookingConfirmationTemplate
};
