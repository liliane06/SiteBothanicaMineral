const nodemailer    = require('nodemailer');
const validator     = require('validator');

function sendMail(msg){
    nodemailer.createTestAccount((err, account) => {

        let transporter = nodemailer.createTransport({
            host: 'smtp.umbler.com',
            port: 587,
            secure: false, 
            auth: {
                user: process.env._MAIL_USER, 
                pass:  process.env._MAIL_PASS 
            }
        });
    
        let mailOptions = {
            from: `Site BM <${process.env._MAIL_USER}>`,
            to: 'isaias@happybiz.com.br', 
            subject: 'Formulário (Bothanica Mineral)',
            text: msg,  
            html: msg
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));   
        });
    });
    
}

exports.formContato = (req, res) => {
    res.render('fale-conosco');
}

exports.formContatoPost = (req, res) => {
    let errors = [];
    let nome    = req.body.nome;
    let email   = req.body.email;
    let tel     = req.body.tel;
    let empresa = req.body.empresa;
    let cat     = req.body.categoria;
    let msg     = req.body.mensagem;

    if(nome === ""){
        errors["nome"] = "Preencha o campo nome";
    }

    if(email === ""){
        errors['email'] = "Preencha o campo e-mail";
    }

    if(tel === ""){
        errors['tel'] = "Campo telefone é obrigatório!!"
    }

    const msgSend = `
        <p>Você recebeu uma mensagem vinda do site BothanicaMineral.com.br</p>
        <p>Nome: ${nome ? nome : "Não definido"} </p>
        <p>Telefone: ${tel ? tel : "(00) 00000 0000)"}</p> 
        <p>Empresa: ${empresa ? empresa : "campo não preenchido"}</p>
        ${ cat ? "<p>Categoria de profissional: " + cat + "</p>": "" }
        <p>Mensagem: ${msg} </p>
    `

    if( errors.length > 0 ){
        console.log( errors.length)
        console.log( errors.length <= 0);
        res.render('fale-conosco', {
            err: true,
            errors : errors
        });
    }else{
        sendMail(msgSend);
        res.redirect('/fale-conosco');
    }
    
}