import express, { Request, Response, NextFunction } from 'express';

export const router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction): void {
  res.render('index', { title: 'Express' });
});
