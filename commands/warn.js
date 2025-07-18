module.exports = {
  name: "warn",
  description: "Warns a member",
  command: ["warn"],
  async execute(client, message, args) {
    const name = args.join(" ");
    if (!name) {
      return client.sendMessage(message.key.remoteJid, {
        text: "⚠️ Usage: !warn [member name or reason]",
      });
    }
    await client.sendMessage(message.key.remoteJid, {
      text: `⚠️ Warning issued to *${name}*. Please follow the group rules.`,
    });
  }
};
