import type { ErrorRequestHandler } from "express";

import { Request, Response, NextFunction } from 'express'

import { DEV_MODE } from '../Config/constants';

import { ValidationError } from 'joi';

import customErrorHandler from '../Services/customErrorHandler'

interface data {     
    message: string;
    original_error ?: string;
  }
const errorHandler = (err:ErrorRequestHandler, req:Request, res:Response, next:NextFunction) => {
    let statuscode : number = 500;
    let data = {
        message: 'internal server error',
        ...(DEV_MODE === 'true' && { original_error : err })
    }
    
    if (err instanceof ValidationError) {
        statuscode = 400;
        data = {
            message: err.message,
        }
    }
    if (err instanceof customErrorHandler) {
        statuscode = err.status;
        data = {
            message: err.message,
        }
    }
     return res.status(statuscode).json(data);
};

export default errorHandler;