import request from 'supertest';
import app from '../index.js';

const userApi = describe('User API', () => {
  it('should get all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
        {
            "_id": "654bab4e1d8047f787a1736e",
            "name": "Admin User",
            "email": "admin@example.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$iF9WACbkHAIFuZiAcDk7zw$nhjl+GXWtfsZnMe/xRrTWKgGHgy4KkNyd0r3demPF68",
            "no_telp": "9876543210",
            "roles": "admin",
            "__v": 0,
            "createdAt": "2023-11-08T15:37:50.903Z",
            "updatedAt": "2023-11-08T15:37:50.903Z"
        },
        {
            "_id": "654bab4e1d8047f787a1736d",
            "name": "User 1",
            "email": "user1@example.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$46dCG2Lky7J3xc+RglF2UA$Ius87ukUqfZ635IBOUTm0bXd5JBOlS9u5LliMP+fqW4",
            "no_telp": "1234567890",
            "roles": "user",
            "__v": 0,
            "createdAt": "2023-11-08T15:37:50.902Z",
            "updatedAt": "2023-11-08T15:37:50.902Z"
        },
        {
            "_id": "654bab4e1d8047f787a1736f",
            "name": "Contributor User",
            "email": "contributor@example.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$nrmcoN/liQBC5bwW/0RdaQ$L9X6nTLTx3IPBz5W+0F+j8Kqyu+Lgd0wW+r8nonc65A",
            "no_telp": "9876543210",
            "roles": "contributor",
            "__v": 0,
            "createdAt": "2023-11-08T15:37:50.904Z",
            "updatedAt": "2023-11-08T15:37:50.904Z"
        },
        {
            "_id": "65520a8cffe27231eab2ce16",
            "name": "kanban",
            "email": "kanban@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$9tEvqZYDhcln/pVPqa5d9A$TCNAyoktRGD/QgWdRBZEbB31xwcv3UYNzKEp54X/jys",
            "no_telp": "0",
            "roles": "user",
            "createdAt": "2023-11-13T11:37:48.863Z",
            "updatedAt": "2023-11-13T11:37:48.863Z",
            "__v": 0
        },
        {
            "_id": "65521297ffe27231eab2ce59",
            "name": "John Doe",
            "email": "johndoe@example.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$v/bBj351KncxdtZddJ2bPQ$d4mhCZJlGdzPd8X1bTHX+h8Y1Lv6PyLgfg8MZgfRo8U",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:12:07.307Z",
            "updatedAt": "2023-11-13T12:12:07.307Z",
            "__v": 0
        },
        {
            "_id": "6552140effe27231eab2ce63",
            "name": "Jane Doe",
            "email": "janedoe@example.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$gapICDeZC1SGaz4LBYTkNQ$yDR7AYTr16TW/+ryLGRKc9uPoH0lyUlG+pXkUC3EU6g",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:18:22.208Z",
            "updatedAt": "2023-11-13T12:18:22.208Z",
            "__v": 0
        },
        {
            "_id": "655215f6ffe27231eab2ce6a",
            "name": "extreme",
            "email": "extreme@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$8lUcZ1frtTOd7QeByu/bYA$EVN484xbm/UCzH+m4UAKPH17p+r1hVIM0IJ3HQmj/GE",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:26:30.579Z",
            "updatedAt": "2023-11-13T12:26:30.579Z",
            "__v": 0
        },
        {
            "_id": "6552160fffe27231eab2ce6c",
            "name": "scrum",
            "email": "scrum@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$jZozr5cVml++HBj03wnPnA$+PPkDBrB4V8ctSp4Mgdcj7hfFFoY2+bsGUGMFwMQdTA",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:26:55.962Z",
            "updatedAt": "2023-11-13T12:26:55.962Z",
            "__v": 0
        },
        {
            "_id": "655216c2ffe27231eab2ce6e",
            "name": "sauscabe",
            "email": "sauscabe@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$JvRjgTbnlPj63BcQz0S64A$tYFIQ7//zgEpPv1I5YOE0OvyLrinyXIFMFZW6Invd3A",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:29:54.371Z",
            "updatedAt": "2023-11-13T12:29:54.371Z",
            "__v": 0
        },
        {
            "_id": "655219c3ffe27231eab2ce73",
            "name": "fruittea",
            "email": "fruittea@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$eGwLIgDD7eyGBE0nkLyvjQ$CDRKmJCqcrVQrxYsytoijzvB462tXRb11LC2pCXZ1MQ",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:42:43.346Z",
            "updatedAt": "2023-11-13T12:42:43.346Z",
            "__v": 0
        },
        {
            "_id": "65521b8dffe27231eab2ce79",
            "name": "goodday",
            "email": "goodday@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$LcPjdqiBuwEyxnfDkoykbA$89ysPO1L7yCJvNEPxpk4qbLC7SMWG5lXIsSd/ygJjfc",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:50:21.553Z",
            "updatedAt": "2023-11-13T12:50:21.553Z",
            "__v": 0
        },
        {
            "_id": "65521cd9ffe27231eab2ce7b",
            "name": "supakatsu",
            "email": "supakatsu@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$lUYTsfpV6v7RoqW8x1VCtg$BD0bVmG8iCJudYE5sjroUUFQ6jeTyHFbeh3snNOthfk",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:55:53.922Z",
            "updatedAt": "2023-11-13T12:55:53.922Z",
            "__v": 0
        },
        {
            "_id": "65521d13ffe27231eab2ce7d",
            "name": "lemonilo",
            "email": "lemonilo@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$hmNum+QO5mm/rIiD1o8rvg$nQb2tSffjjAuowIeeZtyPG+a9hCgI0JEyxpa/h66MjI",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T12:56:51.664Z",
            "updatedAt": "2023-11-13T12:56:51.664Z",
            "__v": 0
        },
        {
            "_id": "65521dd8ffe27231eab2ce80",
            "name": "airputih",
            "email": "airputih@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$jskHIhCTLO59NuYvIMe1IQ$Q3G3v14rmvDyJZ3b0pJpFqipogdVgmD/+f+WdZL6nbw",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-13T13:00:08.199Z",
            "updatedAt": "2023-11-13T13:00:08.199Z",
            "__v": 0
        },
        {
            "_id": "6552f01a6444c5f49dacab2e",
            "name": "mouse",
            "email": "mouse@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$Ukhh3t0Zmjd1wAqx8EuLdg$yI0UtUOlJK9Safis8hsTfaqKyrJdEOao3pT6vHhFZsw",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T03:57:14.369Z",
            "updatedAt": "2023-11-14T03:57:14.369Z",
            "__v": 0
        },
        {
            "_id": "6552fe8c6444c5f49dacab33",
            "name": "pancong",
            "email": "pancong@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$ll4xjfnSxYZvbkAmlpPNbQ$OoYRq9P3aAMxjSacTm+b9h3+09SuTtODOkQF188NVfg",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T04:58:52.411Z",
            "updatedAt": "2023-11-14T04:58:52.411Z",
            "__v": 0
        },
        {
            "_id": "6553230529e026ca0e96884f",
            "name": "cappucino",
            "email": "cappucino@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$4rL/aRhTiKNYKSICVVrtWw$VjaKDxu2fmRcoWyP+gxW48ln9lsB1qGIv2oMjG8q5g8",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T07:34:29.554Z",
            "updatedAt": "2023-11-14T07:34:29.554Z",
            "__v": 0
        },
        {
            "_id": "6553260029e026ca0e968855",
            "name": "latte",
            "email": "latte@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$zh2QxLfzN4cwNLvwbHRBjg$iCW1WSE4vYT1rxzCKv5d5J1iVvOjRUgYVYk67y9DH54",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T07:47:12.150Z",
            "updatedAt": "2023-11-14T07:47:12.150Z",
            "__v": 0
        },
        {
            "_id": "6553272829e026ca0e968857",
            "name": "ayam",
            "email": "ayam@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$Ow9HFx+nN5pYgMjD+92OnA$Ti9j0aH+jw1nLBvBxO5xhs//9Ijl+KM0aP383rubFss",
            "no_telp": "123456789",
            "roles": "user",
            "createdAt": "2023-11-14T07:52:08.525Z",
            "updatedAt": "2023-11-14T07:52:08.525Z",
            "__v": 0
        },
        {
            "_id": "6553280529e026ca0e968859",
            "name": "kipas",
            "email": "kipas@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$DJXievAIH3rq8RPs8UTTsQ$LzJ2W3PEJGa9Xk+l077/D97PIyO5pH0W1avf7NQfSyQ",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T07:55:49.717Z",
            "updatedAt": "2023-11-14T07:55:49.717Z",
            "__v": 0
        },
        {
            "_id": "655329be29e026ca0e96885b",
            "name": "kunci",
            "email": "kunci@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$tZoORLQqjwfVRhoItFLw8g$gLj9wtnQm7uXlPFEdzEfyW8aI10IzKuCwTvpxgxuVEQ",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:03:10.423Z",
            "updatedAt": "2023-11-14T08:03:10.423Z",
            "__v": 0
        },
        {
            "_id": "655329ff29e026ca0e96885d",
            "name": "angin",
            "email": "angin@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$eqTA6ryy7Qr70b0s35hJfA$XkNaWkt4mzKTJK1fjzTXXq765LwddFOq1HS4gntVoMg",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:04:15.229Z",
            "updatedAt": "2023-11-14T08:04:15.229Z",
            "__v": 0
        },
        {
            "_id": "655331c329e026ca0e96885f",
            "name": "mukena",
            "email": "mukena@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$SHThkKAktjbLF67pkQrV8A$h5UA3zrAnT2o56PozGX6BGxJxM3qbbhMQSH7Y6Ehuug",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:37:23.978Z",
            "updatedAt": "2023-11-14T08:37:23.978Z",
            "__v": 0
        },
        {
            "_id": "6553346c8b2caff59cfbe487",
            "name": "kopi",
            "email": "kopi@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$XVPhSnUZZWsReSkWtJ5itw$5BDA+g+9GxwfVCFECnebnTqchgoxpUNK7ATdtKXm4is",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:48:44.444Z",
            "updatedAt": "2023-11-14T08:48:44.444Z",
            "__v": 0
        },
        {
            "_id": "655334a98b2caff59cfbe48b",
            "name": "cape",
            "email": "cape@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$ocZp1H1TtZ3dhPFvUsKJdw$2fBDkbJk8kip1EjMQQBIJ9Xa1ANBXlPQE01PccT7ui0",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:49:45.719Z",
            "updatedAt": "2023-11-14T08:49:45.719Z",
            "__v": 0
        },
        {
            "_id": "655334cd8b2caff59cfbe491",
            "name": "kuda",
            "email": "kuda@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$5HVWScr3MCvz2lCzLWup7g$VtleMzlgr7kZbiYT993BTuZAeCxUIz+Y4w9SJonq2qM",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:50:21.137Z",
            "updatedAt": "2023-11-14T08:50:21.137Z",
            "__v": 0
        },
        {
            "_id": "655335778b2caff59cfbe493",
            "name": "paket",
            "email": "paket@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$bggn4o6WdEwkZYsJkMg0gA$Lvv/dRmrluqZvBlXqyj+qc5Cm3V9+psOp4ABXV5fI7k",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:53:11.209Z",
            "updatedAt": "2023-11-14T08:53:11.209Z",
            "__v": 0
        },
        {
            "_id": "655335e28b2caff59cfbe499",
            "name": "pedes",
            "email": "pedes@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$X+TiplXW9yXwLE5uqWPEnw$NC3YzIZy8EKCnMbzHKzuqBPTLZk8V/wKc0I1vBBZsUg",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:54:58.482Z",
            "updatedAt": "2023-11-14T08:54:58.482Z",
            "__v": 0
        },
        {
            "_id": "655335fb8b2caff59cfbe49d",
            "name": "pusing",
            "email": "pusing@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$tQeiTs5jFzAI7g/ppfIaAQ$AkY7zYH24STUtz4HqLHIkecEK9K5eqyFcs56Rl/zcr8",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:55:23.945Z",
            "updatedAt": "2023-11-14T08:55:23.945Z",
            "__v": 0
        },
        {
            "_id": "655336db8b2caff59cfbe4a1",
            "name": "kucing",
            "email": "kucing@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$5DIAXhhID9ABnLOMulSmCQ$fktOXOJFmzNo5KTLUmivwBe4krmpL5lwGjbJMZd5N4M",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T08:59:07.072Z",
            "updatedAt": "2023-11-14T08:59:07.072Z",
            "__v": 0
        },
        {
            "_id": "655337998b2caff59cfbe4a3",
            "name": "sampah",
            "email": "sampah@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$J6966gOoOt7jYPceuMATSQ$7/3LVYG0rHa5MSK3hqkCzwRxByk5Bg2ai74voa2RPsg",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T09:02:17.650Z",
            "updatedAt": "2023-11-14T09:02:17.650Z",
            "__v": 0
        },
        {
            "_id": "6553382d8b2caff59cfbe4aa",
            "name": "terakhir",
            "email": "terakhir@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$2md18shcwzba6ZLtWRAqPw$9UFV3FAZXKlgYZQzuVtNYMJOXZOJK8dzyiHw0qTlNWA",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T09:04:45.004Z",
            "updatedAt": "2023-11-14T09:04:45.004Z",
            "__v": 0
        },
        {
            "_id": "655339628b2caff59cfbe4b7",
            "name": "makan",
            "email": "makan@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$TaU2fXdARLtsOk7E9Bq/vw$jYFAKNAi+hPfY9VntVO8ONPps42d/Q1zL1JUXFynY2A",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T09:09:54.385Z",
            "updatedAt": "2023-11-14T09:09:54.385Z",
            "__v": 0
        },
        {
            "_id": "65533cfc8b2caff59cfbe4c2",
            "name": "stress",
            "email": "stress@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$zii0UFPop38lQPPtqPLD4A$EaYRvBduYP9ogQ085/gAlmo0JcO7QhZgXWEPj7en6oo",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T09:25:16.237Z",
            "updatedAt": "2023-11-14T09:25:16.237Z",
            "__v": 0
        },
        {
            "_id": "65533f5a6fe504bd203099e2",
            "name": "hujan",
            "email": "hujan@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$J/Or1GhCRhVdW8qRkf0KBQ$di+vzo2SVnFK5Dm2+vGHtRGv7YzTBxUpggXQ/zr03g4",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-14T09:35:22.708Z",
            "updatedAt": "2023-11-14T09:35:22.708Z",
            "__v": 0
        },
        {
            "_id": "65537ca91863592ffc5986e4",
            "name": "nandaraihan",
            "email": "nandaraihansukma@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$H28dF9+pyOHEIw1GoJirzg$W8kHB1vQ3LNkSDVschscQaMmLKjbRl0o837dvwdl9c8",
            "no_telp": "082215491219",
            "roles": "user",
            "createdAt": "2023-11-14T13:56:57.275Z",
            "updatedAt": "2023-11-14T13:56:57.275Z",
            "__v": 0
        },
        {
            "_id": "6556465986aea44408bf3037",
            "name": "begel",
            "email": "begel@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$vBP5d/aWkvZAmCS9aaI1Rw$2Gr1bbs23NHsHmuT4+bPGjssG9Su7/X6fogsZHpPgK4",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-16T16:42:01.482Z",
            "updatedAt": "2023-11-16T16:42:01.482Z",
            "__v": 0
        },
        {
            "_id": "655704a3532f710f9da3b796",
            "name": "abc",
            "email": "abc@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$1t6EA7HM3Knnyz/YsJyONg$4QrX44katSXgnULAdDe62k6SKIpnYfkeMZKKufR76v8",
            "no_telp": "123456789",
            "roles": "user",
            "createdAt": "2023-11-17T06:13:55.620Z",
            "updatedAt": "2023-11-17T06:13:55.620Z",
            "__v": 0
        },
        {
            "_id": "6557575a532f710f9da3b7f6",
            "name": "nugetpisang",
            "email": "nugetpisang@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$Qs/hYqb9BpTYaIRL2iTWSA$qgDeXTCd1JmoHP9p3gdzqYEGCP9Sfww6t9js8oJsJ0s",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-17T12:06:50.453Z",
            "updatedAt": "2023-11-17T12:06:50.453Z",
            "__v": 0
        },
        {
            "_id": "65575879532f710f9da3b7fe",
            "name": "coklat",
            "email": "coklat@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$v9/lQiaYuQgryacrRSInaA$DQBfN4CIjmZHx9IqTsBSuNIjUVEs0MLmpPKKdw4BjRM",
            "no_telp": "123412341234",
            "roles": "user",
            "createdAt": "2023-11-17T12:11:37.093Z",
            "updatedAt": "2023-11-17T12:11:37.093Z",
            "__v": 0
        },
        {
            "_id": "65578d2257b74e95ff74526d",
            "name": "botol",
            "email": "botol@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$jU+ss1qnAqXG9Gp7JClu7g$//mmc6HHgh+tWjIW1ScrppG4iTSOHdNodaejL68Bfo8",
            "no_telp": "123456789101",
            "roles": "user",
            "createdAt": "2023-11-17T15:56:18.404Z",
            "updatedAt": "2023-11-17T15:56:18.404Z",
            "__v": 0
        },
        {
            "_id": "655b8ece7ef47be2b33d3fa8",
            "name": "jus",
            "email": "jus@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$0VluXdIKcHu+fukBXEqX6Q$VY5EK9+pcaqpcNo7q71QFeAIjgVn2WAKYhdJFDvrwbE",
            "no_telp": "123412341234",
            "roles": "user",
            "createdAt": "2023-11-20T16:52:30.038Z",
            "updatedAt": "2023-11-20T16:52:30.038Z",
            "__v": 0
        },
        {
            "_id": "655b8f1a7ef47be2b33d3fae",
            "name": "nuvo",
            "email": "nuvo@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$4pPR64zmirjSntluQwwz7Q$kInnTjhbZFl/ZlKC4btPtQ5H0jKC7eHtq5qgDgDG6WI",
            "no_telp": "123412341234",
            "roles": "user",
            "createdAt": "2023-11-20T16:53:46.921Z",
            "updatedAt": "2023-11-20T16:53:46.921Z",
            "__v": 0
        },
        {
            "_id": "65647084baa67e064f9c29ec",
            "name": "Testing Register",
            "email": "register@example.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$vrDryvELZmrAaKGgTdTb+w$lPCrGHWEoA4sOQPS0/spI2eD5BQjKaHjamT08fWjlOk",
            "no_telp": "1234567890",
            "roles": "user",
            "createdAt": "2023-11-27T10:33:40.264Z",
            "updatedAt": "2023-11-27T10:33:40.264Z",
            "__v": 0
        }
    ]);
  });

  it('should get a user by ID', async () => {
    const response = await request(app).get('/users/65520a8cffe27231eab2ce16');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        {
            "_id": "65520a8cffe27231eab2ce16",
            "name": "kanban",
            "email": "kanban@gmail.com",
            "password": "$argon2id$v=19$m=65536,t=3,p=4$9tEvqZYDhcln/pVPqa5d9A$TCNAyoktRGD/QgWdRBZEbB31xwcv3UYNzKEp54X/jys",
            "no_telp": "0",
            "roles": "user",
            "createdAt": "2023-11-13T11:37:48.863Z",
            "updatedAt": "2023-11-13T11:37:48.863Z",
            "__v": 0
        }
    );
  });

  it('should save a new user', async () => {
    const newUser = {
        "name": "Test Save User",
        "email": "test@gmail.com",
        "password": "test2123",
        "no_telp": "012345678910",
        "roles": "user",
        "__v": 0
    };
    const response = await request(app)
      .post('/users')
      .send(newUser);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(expect.objectContaining({
        "email": expect.stringContaining("test@gmail.com")
    }));
  });

  it('should update a user by ID', async () => {
    const updatedUserData = {
        "name": "Update Test Name",
        "email": "updatetest@gmail.com",
    };
    const response = await request(app)
      .patch('/users/6564d389c45d7a23e9ea2b35')
      .send(updatedUserData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        }
    );
  });

  it('should delete a user by ID', async () => {
    const response = await request(app).delete('/users/65647084baa67e064f9c29ec');
    expect(response.status).toBe(200);
  });
});
