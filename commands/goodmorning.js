module.exports = {
  name: "goodmorning",
  description: "Sends a good morning message to the group",
  command: ["goodmorning", "gm"],
  async execute(client, message, args) {
    await client.sendMessage(message.key.remoteJid, {
      text: "🌞 Good morning everyone! Wishing you a productive and joyful day!",
    });
  }
};
