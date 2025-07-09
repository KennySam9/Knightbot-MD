module.exports = {
  name: "approve",
  description: "Approves new members",
  command: ["approve"],
  async execute(client, message, args) {
    const name = args.join(" ");
    if (!name) {
      return client.sendMessage(message.key.remoteJid, {
        text: "✅ Usage: !approve [member name]",
      });
    }
    await client.sendMessage(message.key.remoteJid, {
      text: `✅ *${name}* has been approved to join the group!`,
    });
  }
};
