import { Router } from "express";

import { createFeedBackController } from './useCases/createFeedback';

export const routes = Router();

routes.post('/feedbacks', (request, response) => {
    return createFeedBackController.handle(request, response);
});
