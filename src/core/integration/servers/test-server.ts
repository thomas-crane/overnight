import { Server } from '../../lib';

/**
 * An Overnight server which can be used for testing purposes.
 * This exposes the underlying express app so that it can be
 * more easily accessed by supertest.
 */
export class TestServer extends Server {
    /**
     * The underlying express app of the server.
     */
    public expressApp: any;


    constructor() {
        super();
        this.expressApp = this.app;
    }
}

