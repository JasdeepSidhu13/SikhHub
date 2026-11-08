function recipient(): string {
  return String.fromCharCode(106, 97, 115, 100, 101, 101, 112, 115, 105, 100, 104, 117, 49, 51, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109);
}

export interface ContactPayload {
  name: string;
  email: string;
  topic: string;
  message: string;
  website?: string;
}

export async function sendMessage(payload: ContactPayload): Promise<{ ok: boolean; message: string }> {
  if (payload.website?.trim()) {
    return { ok: true, message: "Thank you. The message has been received." };
  }
  const name = payload.name.trim();
  const email = payload.email.trim();
  const topic = payload.topic.trim();
  const message = payload.message.trim();
  if (!name || !email || !message) {
    return { ok: false, message: "Please give your name, a reply address, and a message." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, message: "Please give a valid reply address." };
  }

  const res = await fetch(`https://formsubmit.co/ajax/${recipient()}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name,
      email,
      topic,
      message,
      _subject: `sikhhub · ${topic || "Message"}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const data = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (!res.ok && !data.success) {
    return {
      ok: false,
      message: "The message could not be sent. Please wait a moment and try again.",
    };
  }
  return {
    ok: true,
    message:
      "Thank you. The message has been received. If this is the first note sent from the site, the founder will confirm the mailbox and then it will arrive.",
  };
}
