let handler = async m => m.reply(`
β­βγ πΊπππππππ γ
β β’ πππ¦πππ [paypal.me/Edar500]
β β’ Pero con que me presentes atu hermana basta:)
β β’ Dale mi nΓΊmero jaja http://wa.me/50498798682
β°ββββ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
