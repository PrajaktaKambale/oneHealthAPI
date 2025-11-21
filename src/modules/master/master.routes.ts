import { Router } from 'express';
import { MasterController } from './master.controller';
import { MasterValidator } from './master.validator';
import { jwtMiddleware, validateRequest } from '../../middlewares';

const router = Router();

/**
 * Master Data Routes
 * All routes require JWT authentication
 */

// Get available collections
router.get(
  '/master',
  jwtMiddleware,
  MasterController.getAvailableCollections
);

// Search within a collection
router.get(
  '/master/:collection/search',
  jwtMiddleware,

  MasterController.searchMasterData
);

// Get master data by collection name
router.get(
  '/master/:collection',
  jwtMiddleware,
  
  MasterController.getMasterData
);

export default router;