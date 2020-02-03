const AWS_SES = require('aws-sdk/clients/ses');
const SES = new AWS_SES();

/**
 * Send an email to Amazon Simple Email Service
 * @param {Object} formData
 * @param {Function} callback
 */
function sendEmail(formData, callback) {
  const emailParams = {
    Source: 'contactform@lewisneedham.com',
    ReplyToAddresses: [formData.email],
    Destination: {
      ToAddresses: ['hello@lewisneedham.com'],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New message from lewisneedham.com',
      },
    },
  };

  SES.sendEmail(emailParams, callback);
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, (err, data) => {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://www.lewisneedham.com',
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};
