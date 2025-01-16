const express = require("express");
const app = express();
const port = 3000; // O el puerto que estés usando

app.get("/", (req, res) => res.send("Aplicación funcionando"));

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
