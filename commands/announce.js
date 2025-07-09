module.exports = {
  name: "announce",
  description: "Sends an announcement to the group",
  command: ["announce"],
  async execute(client, message, args) {
    const text = args.join(" ");
    if (!text) {
      return client.sendMessage(message.key.remoteJid, {
        text: "❗ Please provide a message to announce.\nExample: !announce Group meeting at 6PM",
      });
    }
    await client.sendMessage(message.key.remoteJid, {
      text: `📢 *Announcement:*
${text}`,
    });
  }
};
