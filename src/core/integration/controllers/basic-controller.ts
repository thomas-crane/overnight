import { NextFunction, Request, Response } from 'express';
import { Controller, Delete, Get, Middleware, Options, Patch, Post, Put } from '../../lib';

const exampleMiddleware = (_: Request, res: Response, next: NextFunction) => {
    res.setHeader('x-middleware-test', 'example value');
    next();
};

@Controller('')
export class BasicController {
    @Get()
    public get(_: Request, res: Response) {
        res.sendStatus(200);
    }


    @Post('post')
    public post(_: Request, res: Response) {
        res.sendStatus(200);
    }


    @Put()
    @Middleware(exampleMiddleware)
    public put(_: Request, res: Response) {
        res.sendStatus(200);
    }


    @Delete()
    public delete(_: Request, res: Response) {
        res.sendStatus(200);
    }


    @Options()
    public options(_: Request, res: Response) {
        res.sendStatus(200);
    }


    @Patch()
    public patch(_: Request, res: Response) {
        res.sendStatus(200);
    }
}
