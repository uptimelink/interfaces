import { expect, tap } from '@pushrocks/tapbundle';
import * as interfaces from '../ts/index';

tap.test('first test', async () => {
  console.log('hi' as interfaces.pagechecks.IRequest_PageCheck_Assumption['request']['domain']);

});

tap.start();
