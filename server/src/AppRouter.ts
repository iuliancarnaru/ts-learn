import express from 'express';

/*
Singleton is a creational design pattern that lets you ensure 
that a class has only one instance, while providing a global 
access point to this instance.
*/

// setting up a singleton
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
