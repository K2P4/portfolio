const formatMessage = (name, email, message) => `🚀 *New Contact Request*\n\n` + `👤 *Name:* ${name}\n` + `📧 *Email:* ${email}\n\n` + `📝 *Message:*\n${message}`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);
    const token = process.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

    console.log(token, chatId);
    if (!token || !chatId) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Missing Telegram config' }) };
    }

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatMessage(name, email, message),
        parse_mode: 'Markdown',
      }),
    });

    const result = await response.json();

    return {
      statusCode: result.ok ? 200 : 400,
      body: JSON.stringify(result.ok ? { status: 'Sent' } : { error: result.description }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
