const VOICE_SERVER = 'https://dangerousgem.onrender.com';

async function speak(text) {
  await fetch(`${VOICE_SERVER}/speak`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text })
  });
}
