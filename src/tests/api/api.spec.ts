// tests/api/api.spec.ts
import { test, expect, APIRequestContext } from '@playwright/test';

test.describe('API – Saucedemo', () => {
  let api: APIRequestContext;

  test.beforeAll(async ({ request }) => {
    api = await request.newContext({ baseURL: 'https://www.saucedemo.com' });
  });

  test('GET /status renvoie 200', async () => {
    const res = await api.get('/status');
    expect(res.status()).toBe(200);
  });

  test('POST /login bons identifiants renvoie token', async () => {
    const res = await api.post('/login', {
      data: { username: 'standard_user', password: 'secret_sauce' }
    });
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.token).toBeDefined();
  });

  test('POST /login mauvais identifiants renvoie 401', async () => {
    const res = await api.post('/login', {
      data: { username: 'invalid', password: 'wrong' }
    });
    expect(res.status()).toBe(401);
    const err = await res.json();
    expect(err.error).toContain('Username and password');
  });

  test('GET /products renvoie une liste non vide', async () => {
    const res = await api.get('/products');
    expect(res.status()).toBe(200);
    const products = await res.json();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });
});
