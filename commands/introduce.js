module.exports = {
  name: "introduce",
  description: "Introduces a new member",
  command: ["introduce"],
  async execute(client, message, args) {
    const name = args.join(" ");
    if (!name) {
      return client.sendMessage(message.key.remoteJid, {
        text: "👤 Usage: !introduce [name of new member]",
      });
    }
    await client.sendMessage(message.key.remoteJid, {
      text: `🎉 Welcome *${name}* to the group! Please introduce yourself: name, interests, and what you hope to gain here.`,
    });
  }
};
