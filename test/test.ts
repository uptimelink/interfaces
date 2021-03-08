import { expect, tap } from '@pushrocks/tapbundle';
import * as interfaces from '../ts/index';

tap.test('first test', async () => {
  console.log(
    'hi' as interfaces.requests.checkRequests.IRequest_PageCheck_Assumption['request']['domain']
  );
});

tap.start();
