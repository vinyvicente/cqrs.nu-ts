import { Tab, Guid } from './src';

const tab = Tab.open(new Guid('id'), 1, `Mary`);
tab.close();
tab.order([{ test: `test` }]);
