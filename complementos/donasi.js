let handler = async m => m.reply(`
╭─〘 𝑺𝒂𝒎𝒖𝟑𝟑𝟎𝗜 〙
│ • 𝑃𝑎𝑦𝑝𝑎𝑙 [paypal.me/Edar500]
│ • Pero con que me presentes atu hermana basta:)
│ • Dale mi número jaja http://wa.me/50498798682
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
