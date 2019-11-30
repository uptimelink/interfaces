import { expect, tap } from '@pushrocks/tapbundle';
import * as interfaces from '../ts/index';

tap.test('first test', async () => {
  console.log(interfaces.standardExport);
});

tap.start();
