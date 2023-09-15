import express from 'express';
import { ExampleController } from '../controllers/example.controller.js';

const exampleRouter = express.Router();

exampleRouter.get(
  '/',
  // middleware de auth, 
  (req, res) => {
    ExampleController.get(req, res);
  })

export default exampleRouter