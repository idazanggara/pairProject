const nodemailer = require('nodemailer')


//require('dotenv').config()

//step 1
// do --> npm install nodemailer
// then define email id to be used in transporter from nodemailer (see below)

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: '',
        pass: ''
        //ini bisa diisi langung, bisa juga diisi dengan dotenv:
        //kalo gamau langsung coba liat dokumentasi dotenv
        //call with process.env.
        //.env di ignore
        //di dalem .env isi :
        //PASSWORD:
        //EMAIL:
        //bisa cek lengkapnya: https://www.youtube.com/watch?v=Va9UKGs1bwI&t
    }
})

//step 2 define delivery path
//bisa cc juga lihat dokumentasi

let mailOptions = {
    from: 'aga.febriawan@gmail.com',
    to: 'idazanggara@gmail.com',
    subject: 'Testing 123',
    text: 'ini tes ke 2'

}

//IMPORTANT!
//Before sending check you email provider regarding the authority for use
// for an example, you must turn on this feature if you use gmail: https://myaccount.google.com/lesssecureapps

//Step 3 (Time to send it!)

transporter.sendMail(mailOptions, (err, data)=>{
    if (err){
        console.log(err)
    } else {
        console.log('hooray! email is sent!')
    }
})