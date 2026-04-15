const express = require('express');
const path = require('path');
const app = express();
const PORT = 8880;

// Serveert alle bestanden in de 'public' map
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});
