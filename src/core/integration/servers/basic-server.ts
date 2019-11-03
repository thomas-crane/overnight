import { BasicController } from '../controllers/basic-controller';
import { TestServer } from './test-server';

export class BasicServer extends TestServer {
    constructor() {
        super();
        super.addControllers([new BasicController()]);
    }
}
