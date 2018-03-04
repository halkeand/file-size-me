
const express = require('express');
const app = express();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.post('/filesize', upload.single('file'),(req, res) => {
  const fileSize = req.file.size
  res.json({fileSize})
})


const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})
