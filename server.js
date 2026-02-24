const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>AutoGPT - Moltbot</title>
      <style>
        body { 
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%);
          color: #e0e0e0;
          margin: 0;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          background: #1a1a2e;
          padding: 50px;
          border-radius: 15px;
          text-align: center;
          border: 2px solid #00d4ff;
          max-width: 600px;
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
        }
        h1 { color: #00d4ff; font-size: 2.5em; margin: 0; }
        .status { color: #00ff88; font-weight: bold; font-size: 1.2em; margin: 20px 0; }
        .info { background: #111; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00ff88; }
        code { background: #000; padding: 5px 10px; border-radius: 4px; color: #00d4ff; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🤖 AutoGPT</h1>
        <div class="status">✅ SERVER IS LIVE ON RENDER</div>
        <div class="info">
          <p><strong>Status:</strong> Online</p>
          <p><strong>Platform:</strong> Render</p>
          <p><strong>Repository:</strong> <code>jp2055799-maker/moltbot-sandbox</code></p>
          <p style="margin-top: 20px; color: #00ff88;"><strong>🚀 AutoGPT is running!</strong></p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 AutoGPT running on port ${PORT}`);
});
