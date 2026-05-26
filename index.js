const express = require('express');
const app = express();
const ivasms = require('./router');

const COOKIES = process.env.IVAS_COOKIE || ''; // <-- TAMBAHIN INI DI SINI

app.use(express.json());
app.use('/api/ivasms', ivasms);

app.get('/', (req, res) => res.send('IVASMS API'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di ${PORT}`));
