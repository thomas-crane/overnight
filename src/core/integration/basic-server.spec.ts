import test from 'ava';
import * as request from 'supertest';
import { BasicServer } from './servers/basic-server';

const server = new BasicServer();

test.cb('The Get decorator works', (t) => {
    request(server.expressApp)
        .get('/')
        .expect(200, t.end);
});

test.cb('The Post decorator works', (t) => {
    request(server.expressApp)
        .post('/post')
        .expect(200, t.end);
});

test.cb('The Put decorator works', (t) => {
    request(server.expressApp)
        .put('/')
        .expect(200, t.end);
});

test.cb('The middleware decorator works', (t) => {
    request(server.expressApp)
        .put('/')
        .end((err, res) => {
            if (err) {
                t.end(err);
            } else {
                t.is(res.header['x-middleware-test'], 'example value');
                t.end();
            }
        });
});

test.cb('The Delete decorator works', (t) => {
    request(server.expressApp)
        .delete('/')
        .expect(200, t.end);
});

test.cb('The Options decorator works', (t) => {
    request(server.expressApp)
        .options('/')
        .expect(200, t.end);
});

test.cb('The Patch decorator works', (t) => {
    request(server.expressApp)
        .patch('/')
        .expect(200, t.end);
});
