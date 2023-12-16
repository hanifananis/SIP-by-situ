import request from 'supertest';
import app from '../index.js';

const forumAPI = describe('Forum API', () => {
    it('should get all forum', async () => {
        const response = await request(app).get('/forums')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            {
                "_id": "65733b6003cfe82c579c8ba7",
                "judul": "Forum 1",
                "isi": "Isi dari forum pertama",
                "penulis_id": "65521297ffe27231eab2ce59",
                "createdAt": "2023-12-08T15:50:56.038Z",
                "updatedAt": "2023-12-08T15:50:56.038Z",
                "__v": 0,
                "penulis": {
                    "name": "John Doe",
                    "roles": "user"
                }
            },
            {
                "_id": "65733b6303cfe82c579c8bc4",
                "judul": "Forum 2",
                "isi": "Isi dari forum kedua",
                "penulis_id": "655335e28b2caff59cfbe499",
                "createdAt": "2023-12-08T15:50:59.090Z",
                "updatedAt": "2023-12-08T15:50:59.090Z",
                "__v": 0,
                "penulis": {
                    "name": "pedes",
                    "roles": "user"
                }
            }
        ])
    })

    it('should get a forum by ID', async () => {
        const forumId = "65733b6003cfe82c579c8ba7";
        const response = await request(app).get(`/forums/${forumId}`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            {
                "_id": "65733b6003cfe82c579c8ba7",
                "judul": "Forum 1",
                "isi": "Isi dari forum pertama",
                "penulis_id": "65521297ffe27231eab2ce59",
                "createdAt": "2023-12-08T15:50:56.038Z",
                "updatedAt": "2023-12-08T15:50:56.038Z",
                "__v": 0,
                "penulis": {
                    "name": "John Doe",
                    "roles": "user"
                },
                "comments": [
                    {
                        "_id": "65733b6003cfe82c579c8ba9",
                        "penulis_id": "65521297ffe27231eab2ce59",
                        "forum_id": "65733b6003cfe82c579c8ba7",
                        "content": "Comment 1 on Forum 1",
                        "replies": [
                            {
                                "penulis_id": "65521297ffe27231eab2ce59",
                                "content": "Reply 1 on Comment 1 in Forum 1",
                                "_id": "65733b6003cfe82c579c8bab",
                                "created_at": "2023-12-08T15:50:56.637Z",
                                "user": {
                                    "name": "John Doe",
                                    "roles": "user"
                                }
                            },
                            {
                                "penulis_id": "65521297ffe27231eab2ce59",
                                "content": "Reply 2 on Comment 1 in Forum 1",
                                "_id": "65733b6003cfe82c579c8bae",
                                "created_at": "2023-12-08T15:50:56.939Z",
                                "user": {
                                    "name": "John Doe",
                                    "roles": "user"
                                }
                            },
                            {
                                "penulis_id": "6553346c8b2caff59cfbe487",
                                "content": "Updated reply content",
                                "_id": "65733baac786af31a3d5dc04",
                                "created_at": "2023-12-08T15:52:10.054Z",
                                "user": {
                                    "name": "kopi",
                                    "roles": "user"
                                }
                            }
                        ],
                        "created_at": "2023-12-08T15:50:56.290Z",
                        "__v": 1,
                        "user": {
                            "name": "John Doe",
                            "roles": "user"
                        }
                    },
                    {
                        "_id": "65733b6103cfe82c579c8bb2",
                        "penulis_id": "65521297ffe27231eab2ce59",
                        "forum_id": "65733b6003cfe82c579c8ba7",
                        "content": "Comment 2 on Forum 1",
                        "replies": [
                            {
                                "penulis_id": "65521297ffe27231eab2ce59",
                                "content": "Reply 1 on Comment 2 in Forum 1",
                                "_id": "65733b6103cfe82c579c8bb4",
                                "created_at": "2023-12-08T15:50:57.555Z",
                                "user": {
                                    "name": "John Doe",
                                    "roles": "user"
                                }
                            },
                            {
                                "penulis_id": "65521297ffe27231eab2ce59",
                                "content": "Reply 2 on Comment 2 in Forum 1",
                                "_id": "65733b6103cfe82c579c8bb7",
                                "created_at": "2023-12-08T15:50:57.860Z",
                                "user": {
                                    "name": "John Doe",
                                    "roles": "user"
                                }
                            }
                        ],
                        "created_at": "2023-12-08T15:50:57.241Z",
                        "__v": 0,
                        "user": {
                            "name": "John Doe",
                            "roles": "user"
                        }
                    },
                    {
                        "_id": "65733b6203cfe82c579c8bbb",
                        "penulis_id": "65521297ffe27231eab2ce59",
                        "forum_id": "65733b6003cfe82c579c8ba7",
                        "content": "Comment 3 on Forum 1",
                        "replies": [
                            {
                                "penulis_id": "65521297ffe27231eab2ce59",
                                "content": "Reply 1 on Comment 3 in Forum 1",
                                "_id": "65733b6203cfe82c579c8bbd",
                                "created_at": "2023-12-08T15:50:58.419Z",
                                "user": {
                                    "name": "John Doe",
                                    "roles": "user"
                                }
                            },
                            {
                                "penulis_id": "65521297ffe27231eab2ce59",
                                "content": "Reply 2 on Comment 3 in Forum 1",
                                "_id": "65733b6203cfe82c579c8bc0",
                                "created_at": "2023-12-08T15:50:58.781Z",
                                "user": {
                                    "name": "John Doe",
                                    "roles": "user"
                                }
                            }
                        ],
                        "created_at": "2023-12-08T15:50:58.167Z",
                        "__v": 0,
                        "user": {
                            "name": "John Doe",
                            "roles": "user"
                        }
                    }
                ]
            }
        )
    })

    it('should create a new forum', async () => {
        const newForum = {
            "judul": "Test Forum Baru",
            "isi": "Isi dari test forum baru",
            "penulis_id": "6552140effe27231eab2ce63" // jane doe
        }
        const response = await request(app)
            .post('/forums')
            .send(newForum)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "judul": expect.stringContaining("Test Forum Baru")
        }))
    })

    it('should update a forum by ID', async () => {
        const forumId = "6576d6f02e5da0f045352ee6"
        const updateForum = {
            "judul": "Delete Forum 2",
            "isi": "Delete isi forum 2",
        }
        const response = await request(app)
            .put(`/forums/${forumId}`)
            .send(updateForum)
        
        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.objectContaining({
            "judul": expect.stringContaining("Delete Forum 2")
        }))
    })

    it('should delete a forum by ID', async () => {
        const forumId = "6576d51ca570868e2063be8a"
        const response = await request(app).delete(`/forums/${forumId}`)
        expect(response.status).toBe(200)
    })
})

const commentAPI = describe('Comment API', () => {
    it('should create a new comment', async () => {
        const newComment = {
            "forum_id": "6576dabb8c6cc8f7a8b2f9d7",
            "penulis_id": "6552140effe27231eab2ce63",
            "content": "test comment"
        }
        const response = await request(app)
            .post('/comments')
            .send(newComment)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "content": expect.stringContaining("test comment")
        }))
    })

    it('should update a comment by ID', async () => {
        const comment_id = "6576db72dec6b46f47c1faa3"
        const updateComment = {
            "content": "Test Update comment content"
        }
        const response = await request(app)
            .put(`/comments/${comment_id}`)
            .send(updateComment)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.objectContaining({
            "content": expect.stringContaining("Test Update comment content")
        }))
    })

    it('should delete a comment by ID', async () => {
        const comment_id = "6576db72dec6b46f47c1faa3"
        const response = await request(app).delete(`/comments/${comment_id}`)
        expect(response.status).toBe(200)
    })
})

const replyAPI = describe('Reply API', () => {
    it('should add reply of a comment', async () => {
        const comment_id = "657728539011896d9bba068d"
        const addReply = {
            "penulis_id": "6552140effe27231eab2ce63",
            "content": "test reply comment"
        }
        const response = await request(app)
            .post(`/comments/${comment_id}/replies`)
            .send(addReply)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "content": expect.stringContaining("test reply comment")
        }))
    })

    it('should update reply of a comment', async () => {
        const comment_id = "657728539011896d9bba068d"
        const replyId = "657729c02ad0243107688e90"
        const updateReply = {
            "content": "Updated reply content"
        }
        const response = await request(app)
            .put(`/comments/${comment_id}/${replyId}`)
            .send(updateReply)
        
        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.objectContaining({
            "content": expect.stringContaining("Updated reply content")
        }))
    });

    it('should delete reply of a comment', async () => {
        const comment_id = "657728539011896d9bba068d"
        const replyId = "657729c02ad0243107688e90"
        const response = await request(app).del(`/comments/${comment_id}/${replyId}`)
        expect(response.status).toBe(200)
    });
})
