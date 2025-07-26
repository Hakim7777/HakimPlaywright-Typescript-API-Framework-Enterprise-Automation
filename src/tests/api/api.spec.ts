// src/tests/api/api.spec.ts
import { test, expect } from '@playwright/test';

test.describe.configure({ retries: 0, timeout: 30_000 });

const BASE_URL = 'https://reqres.in/api';

test.describe('API – ReqRes', () => {
  test('GET /users/2 renvoie 200 et un utilisateur', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/users/2`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.data).toBeDefined();
    expect(body.data.id).toBe(2);
  });

  test('POST /login bons identifiants renvoie token', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/login`, {
      data: { email: 'eve.holt@reqres.in', password: 'cityslicka' }
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.token).toBeDefined();
  });

  test('POST /login sans mot de passe renvoie 400', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/login`, {
      data: { email: 'peter@klaven' }
    });
    expect(res.status()).toBe(400);
    const body = await res.json();
    expect(body.error).toContain('Missing password');
  });

  test('GET /unknown renvoie une page de ressources', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/unknown`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);
  });
});
