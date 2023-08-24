import express from "express";
// 1 configuraciones iniciales
const app = express();
// crear variablle con express
app.set("port", process.env.PORT || 4000);
// middlewares (funciones)

// crear las rutas
