const ejs = require('ejs');
const pdf = require('html-pdf');

const nome = 'Raphael'
const linguagem = 'Javascript'

function criarPDF() {
    ejs.renderFile('./views/index.ejs',{nome: nome, linguagem:linguagem},(err,html) => {
        if(err) {
            console.log(err)
        }else {
            pdf.create(html,{}).toFile(`./pdf/${Date.now()}.pdf`, (err, res) => {
                if(err) {
                    console.log(err);
                }else{
                    console.log(res)
                }
            })
        }
    })
}

criarPDF()