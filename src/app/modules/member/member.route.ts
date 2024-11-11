import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import memberController from './member.controller';
import {
  memberUpdateValidationSchema,
  memberValidationSchema,
} from './member.validation';

const route = Router();

route.post(
  '/',
  validateRequest(memberValidationSchema),
  memberController.createMember,
);

route.get('/', memberController.getAllMember);

route.get('/:memberId', memberController.getAMember);

route.put(
  '/:memberId',
  validateRequest(memberUpdateValidationSchema),
  memberController.updateMember,
);

route.delete('/:memberId', memberController.deleteMember);

const memberRoute = route;

export default memberRoute;
