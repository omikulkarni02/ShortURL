const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortURL')
const app = express()

const DATABASE = 'mongodb+srv://omikulkarni02:Omkar@123@urlcluster.zwgpk.mongodb.net/Test?retryWrites=true&w=majority'
mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls })
})

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })

    res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
    if (shortUrl == null) {
        return res.sendStatus(404)
    }
    
    res.redirect(shortUrl.full)
  })



app.listen(process.env.PORT || 5000);