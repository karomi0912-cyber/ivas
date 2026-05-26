const express = require('express');
const app = express();
const ivasms = require('./router');

app.use(express.json());
app.use('/api/ivasms', ivasms);

app.get('/', (req, res) => res.send('IVASMS API Online'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di ${PORT}`));
