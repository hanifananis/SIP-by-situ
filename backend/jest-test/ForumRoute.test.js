import request from 'supertest';
import app from '../index.js';

const forumAPI = describe('Forum API', () => {
    // it('should get all forum', async () => {
    //     const response = await request(app).get('/forums')
    //     expect(response.status).toBe(200)
    //     expect(response.body).toEqual([
    //         {
    //             "_id": "65733b6003cfe82c579c8ba7",
    //             "judul": "Forum 1",
    //             "isi": "Isi dari forum pertama",
    //             "penulis_id": "65521297ffe27231eab2ce59",
    //             "createdAt": "2023-12-08T15:50:56.038Z",
    //             "updatedAt": "2023-12-08T15:50:56.038Z",
    //             "__v": 0,
    //             "penulis": {
    //                 "name": "John Doe",
    //                 "roles": "user"
    //             }
    //         },
    //         {
    //             "_id": "65733b6303cfe82c579c8bc4",
    //             "judul": "Forum 2",
    //             "isi": "Isi dari forum kedua",
    //             "penulis_id": "655335e28b2caff59cfbe499",
    //             "createdAt": "2023-12-08T15:50:59.090Z",
    //             "updatedAt": "2023-12-08T15:50:59.090Z",
    //             "__v": 0,
    //             "penulis": {
    //                 "name": "pedes",
    //                 "roles": "user"
    //             }
    //         }
    //     ])
    // })

    // it('should get a forum by ID', async () => {
    //     const response = await request(app).get('/forums/:forumId')
    //     expect(response.status).toBe(200)
    //     expect(response.body).toEqual(/* body */)
    // })

    it('should create a new forum', async () => {
        const newForum = {
            "judul": "Test Forum Baru",
            "isi": "Isi dari test forum baru",
            "penulisId": "6552140effe27231eab2ce63" // jane doe
        }
        const response = await request(app)
            .post('/forums')
            .send(newForum)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "judul": expect.stringContaining("Test Forum Baru")
        }))
    })

    // it('should update a forum by ID', async () => {
    //     const updateForum = {
    //         "judul": "Update Forum 2",
    //         "isi": "update isi forum 2",
    //     }
    //     const response = await request(app)
    //         .put('/forums/:forumId')
    //         .send(updateForum)
        
    //     expect(response.status).toBe(200)
    //     expect(response.body).toEqual(expect.objectContaining({
    //         "judul": expect.stringContaining("Update Forum 2")
    //     }))
    // })

    // it('should delete a forum by ID', async () => {
    //     const response = await request(app).delete('/forums/:forumId')
    //     expect(response.status).toBe(200)
    // })
})

// const commentAPI = describe('Comment API', () => {
//     it('should create a new comment', async () => {
//         const newComment = {
//             "forumId": "65573ed435c10337d5fa5ea7",
//             "userId": "655331c329e026ca0e96885f",
//             "content": "This is a sample comment."
//         }
//         const response = await request(app)
//             .post('/')
//             .send(newComment)

//         expect(response.status).toBe(201)
//         expect(response.body).toEqual(/** body */)
//     })

//     it('should update a comment by ID', async () => {
//         const updateComment = {
//             "forumId": "65573ed435c10337d5fa5ea7",
//             "commentId": "655749883e4aa8469cb90021",
//             "content": "Updated comment content."
//         }
//         const response = await request(app)
//             .put('/')
//             .send(updateComment)

//         expect(response.status).toBe(200)
//         expect(response.body).toEqual(/** body */)
//     })

//     it('should delete a comment by ID', async () => {
//         const response = await request(app).delete('/comments/:forumId/:commentId')
//         expect(response.status).toBe(200)
//     })
// })

// const replyAPI = describe('Reply API', () => {
//     it('should add reply of a comment', async () => {
//         const addReply = {
//             "forumId": "65573ed435c10337d5fa5ea7",
//             "commentId": "65573ed435c10337d5fa5ea8",
//             "userId": "655331c329e026ca0e96885f",
//             "content": "This is a sample reply."
//         }
//         const response = await request(app)
//             .post('/replies')
//             .send(addReply)

//         expect(response.status).toBe(201)
//         expect(response.body).toEqual(/** body */)
//     })
// })
