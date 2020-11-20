/* eslint-disable import/extensions */
import { Router } from 'express';
import { createShortenUrl, getUrl } from '../controllers/router.controllers.js';
import asyncWrapper from '../helpers/asyncWrapper.js';

const router = Router();

router
  .route('/')
  .get((_, res) => res.json({ hello: 'world' }))
  .post(asyncWrapper(createShortenUrl));
router.get('/:slug', asyncWrapper(getUrl));

export default router;
