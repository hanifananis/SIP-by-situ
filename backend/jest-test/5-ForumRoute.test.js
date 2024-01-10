import request from 'supertest';
import app from '../index.js';

const forumAPI = describe('Forum API', () => {
    it('should get all forum', async () => {
        const response = await request(app).get('/forums')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            {
                "_id": "6595888257c58b0e7a8b865b",
                "judul": "Test Forum Baru",
                "isi": "Isi dari test forum baru",
                "penulis_id": "6552140effe27231eab2ce63",
                "createdAt": "2024-01-03T16:17:06.845Z",
                "updatedAt": "2024-01-03T16:17:06.845Z",
                "__v": 0,
                "jumlah_komentar": 0,
                "penulis": {
                    "name": "Jane Doe",
                    "roles": "user"
                }
            },
            {
                "_id": "65813b652a9f78caea9c26d6",
                "judul": "debat capres kedua",
                "isi": "bagiamana tanggapanmu?",
                "penulis_id": "65813a742a9f78caea9c166e",
                "createdAt": "2023-12-19T06:42:45.906Z",
                "updatedAt": "2023-12-19T06:42:45.906Z",
                "__v": 0,
                "jumlah_komentar": 0,
                "penulis": {
                    "name": "kursi",
                    "roles": "user"
                }
            },
            {
                "_id": "658080fdc0e044dbac5aa17e",
                "judul": "Ekspektasi Masyarakat terhadap Partai Politik",
                "isi": "Partai Gelora memperjuangkan kuliah gratis, gimana gais menurut kalian?",
                "penulis_id": "658076adc0e044dbac5a4d46",
                "createdAt": "2023-12-18T17:27:25.760Z",
                "updatedAt": "2023-12-18T17:27:25.760Z",
                "__v": 0,
                "jumlah_komentar": 3,
                "penulis": {
                    "name": "Nanda",
                    "roles": "user"
                }
            },
            {
                "_id": "65807f8bc0e044dbac5a7deb",
                "judul": "Apakah baim wong akan menang pemilu",
                "isi": "Baim wong, seorang pengusaha tahu gejrot asal makassar mengakui bahwa kalau tahu gejrotnya adalah yang paling populer di daerah zimbabwe, apakah ini akan mempengaruhi sentimen rakyat indonesia kepada ed sheeran? kita tunggu saja. Rucika? nyaman di lambung",
                "penulis_id": "65807dd0c0e044dbac5a6273",
                "createdAt": "2023-12-18T17:21:15.853Z",
                "updatedAt": "2023-12-18T17:21:15.853Z",
                "__v": 0,
                "jumlah_komentar": 1,
                "penulis": {
                    "name": "Ganjar pemakan telur kecoa",
                    "roles": "user"
                }
            },
            {
                "_id": "65807f3dc0e044dbac5a7835",
                "judul": "Kandidat capres cawapres ternyata ada 4 paslon",
                "isi": "tebak siapa",
                "penulis_id": "655336db8b2caff59cfbe4a1",
                "createdAt": "2023-12-18T17:19:57.513Z",
                "updatedAt": "2023-12-18T17:19:57.513Z",
                "__v": 0,
                "jumlah_komentar": 1,
                "penulis": {
                    "name": "kucing",
                    "roles": "user"
                }
            },
            {
                "_id": "65807b4dc0e044dbac5a57c7",
                "judul": "Tantangan dan Peluang dalam Pemilihan Umum 2024",
                "isi": "Perubahan teknologi telah membawa tantangan baru dalam mengamankan proses pemilihan",
                "penulis_id": "6556465986aea44408bf3037",
                "createdAt": "2023-12-18T17:03:09.876Z",
                "updatedAt": "2023-12-18T17:03:09.876Z",
                "__v": 0,
                "jumlah_komentar": 2,
                "penulis": {
                    "name": "begel",
                    "roles": "user"
                }
            },
            {
                "_id": "65807a80c0e044dbac5a562a",
                "judul": "Peran Media Sosial dalam Kampanye Pemilu 2024",
                "isi": "Melalui media sosial, para pemilih dapat mengawasi dan memantau aktivitas serta janji-janji kandidat dengan lebih dekat.",
                "penulis_id": "65807920c0e044dbac5a55af",
                "createdAt": "2023-12-18T16:59:44.091Z",
                "updatedAt": "2023-12-18T16:59:44.091Z",
                "__v": 0,
                "jumlah_komentar": 2,
                "penulis": {
                    "name": "Raihan",
                    "roles": "user"
                }
            },
            {
                "_id": "658078d8c0e044dbac5a535a",
                "judul": "Debat Capres Pertama",
                "isi": "Setelah melihat debat capres sudah mulai keliatan yang mana yang lebih baik",
                "penulis_id": "658076adc0e044dbac5a4d46",
                "createdAt": "2023-12-18T16:52:40.347Z",
                "updatedAt": "2023-12-18T16:52:40.347Z",
                "__v": 0,
                "jumlah_komentar": 9,
                "penulis": {
                    "name": "Nanda",
                    "roles": "user"
                }
            }
        ])
    }, 15000)


    it('should get a forum + comment by ID', async () => {
        const forumId = "65807b4dc0e044dbac5a57c7";
        const response = await request(app).get(`/forums/${forumId}`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            {
                "_id": "65807b4dc0e044dbac5a57c7",
                "judul": "Tantangan dan Peluang dalam Pemilihan Umum 2024",
                "isi": "Perubahan teknologi telah membawa tantangan baru dalam mengamankan proses pemilihan",
                "penulis_id": "6556465986aea44408bf3037",
                "createdAt": "2023-12-18T17:03:09.876Z",
                "updatedAt": "2023-12-18T17:03:09.876Z",
                "__v": 0,
                "penulis": {
                    "name": "begel",
                    "roles": "user"
                },
                "comments": [
                    {
                        "_id": "65807f12c0e044dbac5a7660",
                        "penulis_id": "65807dd0c0e044dbac5a6273",
                        "forum_id": "65807b4dc0e044dbac5a57c7",
                        "content": "beri pengamanan sidik jari jempol kaki untuk memperkuat pengamanan",
                        "replies": [],
                        "created_at": "2023-12-18T17:19:14.398Z",
                        "__v": 0,
                        "user": {
                            "name": "Ganjar pemakan telur kecoa",
                            "roles": "user"
                        }
                    },
                    {
                        "_id": "65807d06c0e044dbac5a5e48",
                        "penulis_id": "655331c329e026ca0e96885f",
                        "forum_id": "65807b4dc0e044dbac5a57c7",
                        "content": "ehh iya cuy takut ada yg ngehack",
                        "replies": [
                            {
                                "penulis_id": "6552fe8c6444c5f49dacab33",
                                "content": "yakin lu?",
                                "_id": "65807d60c0e044dbac5a5ff5",
                                "created_at": "2023-12-18T17:12:00.345Z",
                                "user": {
                                    "name": "pancong",
                                    "roles": "user"
                                }
                            },
                            {
                                "penulis_id": "65807dbac0e044dbac5a626e",
                                "content": "lebih takut rafa",
                                "_id": "65807f02c0e044dbac5a757d",
                                "created_at": "2023-12-18T17:18:58.054Z",
                                "user": {
                                    "name": "Wafi",
                                    "roles": "user"
                                }
                            }
                        ],
                        "created_at": "2023-12-18T17:10:30.214Z",
                        "__v": 2,
                        "user": {
                            "name": "mukena",
                            "roles": "user"
                        }
                    }
                ]
            }
        )
    }, 10000)

    it('should not get a forum + comment by unregistered ID', async () => {
        const forumId = "65807b4dc0e044dbac5a57c8";
        const response = await request(app).get(`/forums/${forumId}`)
        expect(response.status).toBe(404)
        expect(response.body).toEqual(
            {
                "message": "Forum not found."
            }
        )
    }, 3000)

    it('should not get a forum + comment by invalid ID', async () => {
        const forumId = "65807b4dc0e044dbac5a57";
        const response = await request(app).get(`/forums/${forumId}`)
        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Cast to ObjectId failed for value \"65807b4dc0e044dbac5a57\" (type string) at path \"_id\" for model \"Forums\""
            }
        )
    }, 3000)


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
    },5000)

    it('should not create a new forum without judul', async () => {
        const newForum = {
            "isi": "Isi dari test forum baru",
            "penulis_id": "6552140effe27231eab2ce63" // jane doe
        }
        const response = await request(app)
            .post('/forums')
            .send(newForum)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Forums validation failed: judul: Path `judul` is required."
            }
        )
    }, 3000)

    it('should not create a new forum without isi', async () => {
        const newForum = {
            "judul": "Test Forum Baru",
            "penulis_id": "6552140effe27231eab2ce63" // jane doe
        }
        const response = await request(app)
            .post('/forums')
            .send(newForum)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Forums validation failed: isi: Path `isi` is required."
            }
        )
    }, 3000)

    it('should not create a new forum with unregistered ID', async () => {
        const newForum = {
            "judul": "Test Forum Baru",
            "isi": "Isi dari test forum baru",
            "penulis_id": "6552140effe27231eab2ce64"
        }
        const response = await request(app)
            .post('/forums')
            .send(newForum)

        expect(response.status).toBe(404)
        expect(response.body).toEqual(
            {
                "message": "User not found."
            }
        )
    }, 3000)

    it('should not create a new forum with invalid ID', async () => {
        const newForum = {
            "judul": "Test Forum Baru",
            "isi": "Isi dari test forum baru",
            "penulis_id": "6552140effe27231eab2"
        }
        const response = await request(app)
            .post('/forums')
            .send(newForum)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Cast to ObjectId failed for value \"6552140effe27231eab2\" (type string) at path \"_id\" for model \"Users\""
            }
        )
    }, 3000)

    it('should not create a new forum without ID', async () => {
        const newForum = {
            "judul": "Test Forum Baru",
            "isi": "Isi dari test forum baru"
        }
        const response = await request(app)
            .post('/forums')
            .send(newForum)

        expect(response.status).toBe(404)
        expect(response.body).toEqual(
            {
                "message": "User not found."
            }
        )
    }, 3000)


    it('should update a forum by ID', async () => {
        const forumId = "6595888257c58b0e7a8b865b"
        const updateForum = {
            "judul": "Delete Forum",
            "isi": "Ini forum yang bakal di delete"
        }
        const response = await request(app)
            .put(`/forums/${forumId}`)
            .send(updateForum)
        
        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.objectContaining({
            "judul": expect.stringContaining("Delete Forum")
        }))
    }, 5000)

    it('should not update a forum by invalid ID', async () => {
        const forumId = "658d389941de45700323"
        const updateForum = {
            "judul": "Delete Forum",
            "isi": "Delete isi forum",
        }
        const response = await request(app)
            .put(`/forums/${forumId}`)
            .send(updateForum)
        
        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Cast to ObjectId failed for value \"658d389941de45700323\" (type string) at path \"_id\" for model \"Forums\""
            }
        )
    }, 3000)


    it('should delete a forum by ID', async () => {
        const forumId = "6595888257c58b0e7a8b865b"
        const response = await request(app).delete(`/forums/${forumId}`)
        expect(response.status).toBe(200)
    }, 5000)

    it('should not delete a forum by invalid ID', async () => {
        const forumId = "658d389941de45700323"
        const response = await request(app).delete(`/forums/${forumId}`)
        expect(response.status).toBe(500)
    }, 3000)
})



const commentAPI = describe('Comment API', () => {
    it('should get all comment', async () => {
        const response = await request(app).get('/comments')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
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
                        "content": "",
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
            },
            {
                "_id": "65733b6303cfe82c579c8bc6",
                "penulis_id": "655335e28b2caff59cfbe499",
                "forum_id": "65733b6303cfe82c579c8bc4",
                "content": "Comment 1 on Forum 2",
                "replies": [
                    {
                        "penulis_id": "655335e28b2caff59cfbe499",
                        "content": "Reply 1 on Comment 1 in Forum 2",
                        "_id": "65733b6303cfe82c579c8bc8",
                        "created_at": "2023-12-08T15:50:59.703Z",
                        "user": {
                            "name": "pedes",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "655335e28b2caff59cfbe499",
                        "content": "Reply 2 on Comment 1 in Forum 2",
                        "_id": "65733b6403cfe82c579c8bcb",
                        "created_at": "2023-12-08T15:51:00.010Z",
                        "user": {
                            "name": "pedes",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-08T15:50:59.338Z",
                "__v": 1,
                "user": {
                    "name": "pedes",
                    "roles": "user"
                }
            },
            {
                "_id": "65733b6403cfe82c579c8bcf",
                "penulis_id": "655335e28b2caff59cfbe499",
                "forum_id": "65733b6303cfe82c579c8bc4",
                "content": "Comment 2 on Forum 2",
                "replies": [
                    {
                        "penulis_id": "655335e28b2caff59cfbe499",
                        "content": "Reply 1 on Comment 2 in Forum 2",
                        "_id": "65733b6403cfe82c579c8bd1",
                        "created_at": "2023-12-08T15:51:00.565Z",
                        "user": {
                            "name": "pedes",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "655335e28b2caff59cfbe499",
                        "content": "Reply 2 on Comment 2 in Forum 2",
                        "_id": "65733b6403cfe82c579c8bd4",
                        "created_at": "2023-12-08T15:51:00.815Z",
                        "user": {
                            "name": "pedes",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-08T15:51:00.316Z",
                "__v": 0,
                "user": {
                    "name": "pedes",
                    "roles": "user"
                }
            },
            {
                "_id": "65733b6503cfe82c579c8bd8",
                "penulis_id": "655335e28b2caff59cfbe499",
                "forum_id": "65733b6303cfe82c579c8bc4",
                "content": "Comment 3 on Forum 2",
                "replies": [
                    {
                        "penulis_id": "655335e28b2caff59cfbe499",
                        "content": "Reply 1 on Comment 3 in Forum 2",
                        "_id": "65733b6503cfe82c579c8bda",
                        "created_at": "2023-12-08T15:51:01.314Z",
                        "user": {
                            "name": "pedes",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "655335e28b2caff59cfbe499",
                        "content": "Reply 2 on Comment 3 in Forum 2",
                        "_id": "65733b6503cfe82c579c8bdd",
                        "created_at": "2023-12-08T15:51:01.561Z",
                        "user": {
                            "name": "pedes",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-08T15:51:01.066Z",
                "__v": 0,
                "user": {
                    "name": "pedes",
                    "roles": "user"
                }
            },
            {
                "_id": "657728539011896d9bba068d",
                "penulis_id": "6552140effe27231eab2ce63",
                "forum_id": "6576dabb8c6cc8f7a8b2f9d7",
                "content": "Updated test comment content.",
                "replies": [
                    {
                        "penulis_id": "6552140effe27231eab2ce63",
                        "content": "test reply comment",
                        "_id": "6595888e57c58b0e7a8b86f0",
                        "created_at": "2024-01-03T16:17:18.394Z",
                        "user": {
                            "name": "Jane Doe",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-11T15:18:43.862Z",
                "__v": 6,
                "user": {
                    "name": "Jane Doe",
                    "roles": "user"
                }
            },
            {
                "_id": "657e4aa86fc9772716d838f6",
                "penulis_id": "654bab4e1d8047f787a1736e",
                "forum_id": "65733930862287e450302b5d",
                "content": "This is a komen 2",
                "replies": [],
                "created_at": "2023-12-17T01:11:04.744Z",
                "__v": 0,
                "user": {
                    "name": "Admin User",
                    "roles": "admin"
                }
            },
            {
                "_id": "65807946c0e044dbac5a55c2",
                "penulis_id": "6553272829e026ca0e968857",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "pilih anies gasi keren bgt kmrn dia",
                "replies": [
                    {
                        "penulis_id": "65807988c0e044dbac5a5609",
                        "content": "gasss all in aniess!",
                        "_id": "658079f4c0e044dbac5a5617",
                        "created_at": "2023-12-18T16:57:24.798Z",
                        "user": {
                            "name": "aku siapa",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "655331c329e026ca0e96885f",
                        "content": "jago ngomong doang",
                        "_id": "65807d2dc0e044dbac5a5f8a",
                        "created_at": "2023-12-18T17:11:09.111Z",
                        "user": {
                            "name": "mukena",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-18T16:54:30.815Z",
                "__v": 4,
                "user": {
                    "name": "ayamgoreng",
                    "roles": "user"
                }
            },
            {
                "_id": "65807c9ec0e044dbac5a5c84",
                "penulis_id": "655331c329e026ca0e96885f",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "gue sih prabowo soalnya gemoy bgt aaaakh",
                "replies": [
                    {
                        "penulis_id": "655336db8b2caff59cfbe4a1",
                        "content": "ah dia udh tua, emosional. terus pas debat pertama kmrn kurang dijaga attitudenya",
                        "_id": "65807e73c0e044dbac5a6e10",
                        "created_at": "2023-12-18T17:16:35.032Z",
                        "user": {
                            "name": "kucing",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "655336db8b2caff59cfbe4a1",
                        "content": "ah dia udh tua, emosional. terus pas debat pertama kmrn kurang dijaga attitudenya",
                        "_id": "65807e81c0e044dbac5a6ead",
                        "created_at": "2023-12-18T17:16:49.255Z",
                        "user": {
                            "name": "kucing",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "655336db8b2caff59cfbe4a1",
                        "content": "ah dia udh tua, emosional. terus pas debat pertama kmrn kurang dijaga attitudenya",
                        "_id": "65807e9cc0e044dbac5a6f4b",
                        "created_at": "2023-12-18T17:17:16.487Z",
                        "user": {
                            "name": "kucing",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "6552fe8c6444c5f49dacab33",
                        "content": "setuju cingg",
                        "_id": "65807ecac0e044dbac5a70a2",
                        "created_at": "2023-12-18T17:18:02.073Z",
                        "user": {
                            "name": "pancong",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-18T17:08:46.013Z",
                "__v": 4,
                "user": {
                    "name": "mukena",
                    "roles": "user"
                }
            },
            {
                "_id": "65807cb6c0e044dbac5a5c97",
                "penulis_id": "65807920c0e044dbac5a55af",
                "forum_id": "65807a80c0e044dbac5a562a",
                "content": "Tapi gak bisa dipungkiri, info palsu di media sosial tuh masalah besar",
                "replies": [
                    {
                        "penulis_id": "65807ff5c0e044dbac5a7fc3",
                        "content": "setuju sih, itu penyakit medsos sekarang",
                        "_id": "65811c062a9f78caea9bf48c",
                        "created_at": "2023-12-19T04:28:54.877Z",
                        "user": {
                            "name": "Ganjar",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-18T17:09:10.429Z",
                "__v": 1,
                "user": {
                    "name": "Raihan",
                    "roles": "user"
                }
            },
            {
                "_id": "65807d06c0e044dbac5a5e48",
                "penulis_id": "655331c329e026ca0e96885f",
                "forum_id": "65807b4dc0e044dbac5a57c7",
                "content": "ehh iya cuy takut ada yg ngehack",
                "replies": [
                    {
                        "penulis_id": "6552fe8c6444c5f49dacab33",
                        "content": "yakin lu?",
                        "_id": "65807d60c0e044dbac5a5ff5",
                        "created_at": "2023-12-18T17:12:00.345Z",
                        "user": {
                            "name": "pancong",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "65807dbac0e044dbac5a626e",
                        "content": "lebih takut rafa",
                        "_id": "65807f02c0e044dbac5a757d",
                        "created_at": "2023-12-18T17:18:58.054Z",
                        "user": {
                            "name": "Wafi",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-18T17:10:30.214Z",
                "__v": 2,
                "user": {
                    "name": "mukena",
                    "roles": "user"
                }
            },
            {
                "_id": "65807e6dc0e044dbac5a6e07",
                "penulis_id": "65807dd0c0e044dbac5a6273",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "MENDING PILIH CIPUNG",
                "replies": [],
                "created_at": "2023-12-18T17:16:29.788Z",
                "__v": 0,
                "user": {
                    "name": "Ganjar pemakan telur kecoa",
                    "roles": "user"
                }
            },
            {
                "_id": "65807e70c0e044dbac5a6e0a",
                "penulis_id": "65807dbac0e044dbac5a626e",
                "forum_id": "65807a80c0e044dbac5a562a",
                "content": "Setuju dengan pendapat tersebut, media sosial kali ini menjadi platform yang kuat bagi paslon untuk menyampaikan gagasannya. Begitujuga medsos untuk pemilih untuk melek politik.",
                "replies": [],
                "created_at": "2023-12-18T17:16:32.645Z",
                "__v": 0,
                "user": {
                    "name": "Wafi",
                    "roles": "user"
                }
            },
            {
                "_id": "65807e76c0e044dbac5a6e21",
                "penulis_id": "65807dd0c0e044dbac5a6273",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "MENDING PILIH CIPUNG",
                "replies": [],
                "created_at": "2023-12-18T17:16:38.030Z",
                "__v": 0,
                "user": {
                    "name": "Ganjar pemakan telur kecoa",
                    "roles": "user"
                }
            },
            {
                "_id": "65807ea0c0e044dbac5a6f4e",
                "penulis_id": "65807dbac0e044dbac5a626e",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "Mas anies... mas anies...",
                "replies": [],
                "created_at": "2023-12-18T17:17:20.092Z",
                "__v": 0,
                "user": {
                    "name": "Wafi",
                    "roles": "user"
                }
            },
            {
                "_id": "65807ed9c0e044dbac5a710e",
                "penulis_id": "65807dd0c0e044dbac5a6273",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "coblos no 4 rafa azka",
                "replies": [
                    {
                        "penulis_id": "65807dd0c0e044dbac5a6273",
                        "content": "benar",
                        "_id": "65807ef2c0e044dbac5a73a3",
                        "created_at": "2023-12-18T17:18:42.501Z",
                        "user": {
                            "name": "Ganjar pemakan telur kecoa",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "65807ff5c0e044dbac5a7fc3",
                        "content": "gas sih",
                        "_id": "658083c0c0e044dbac5aefe5",
                        "created_at": "2023-12-18T17:39:12.955Z",
                        "user": {
                            "name": "Ganjar",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-18T17:18:17.776Z",
                "__v": 3,
                "user": {
                    "name": "Ganjar pemakan telur kecoa",
                    "roles": "user"
                }
            },
            {
                "_id": "65807f12c0e044dbac5a7660",
                "penulis_id": "65807dd0c0e044dbac5a6273",
                "forum_id": "65807b4dc0e044dbac5a57c7",
                "content": "beri pengamanan sidik jari jempol kaki untuk memperkuat pengamanan",
                "replies": [],
                "created_at": "2023-12-18T17:19:14.398Z",
                "__v": 0,
                "user": {
                    "name": "Ganjar pemakan telur kecoa",
                    "roles": "user"
                }
            },
            {
                "_id": "65807f37c0e044dbac5a7832",
                "penulis_id": "6552fe8c6444c5f49dacab33",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "ada cawapres malah moshing",
                "replies": [],
                "created_at": "2023-12-18T17:19:51.573Z",
                "__v": 0,
                "user": {
                    "name": "pancong",
                    "roles": "user"
                }
            },
            {
                "_id": "6580801bc0e044dbac5a8277",
                "penulis_id": "65807ff5c0e044dbac5a7fc3",
                "forum_id": "65807f3dc0e044dbac5a7835",
                "content": "siapa tuh paslonnya",
                "replies": [],
                "created_at": "2023-12-18T17:23:39.354Z",
                "__v": 0,
                "user": {
                    "name": "Ganjar",
                    "roles": "user"
                }
            },
            {
                "_id": "6580806ec0e044dbac5a8b12",
                "penulis_id": "6553230529e026ca0e96884f",
                "forum_id": "65807f8bc0e044dbac5a7deb",
                "content": "gas sih gue pilih",
                "replies": [],
                "created_at": "2023-12-18T17:25:02.614Z",
                "__v": 0,
                "user": {
                    "name": "cappucino",
                    "roles": "user"
                }
            },
            {
                "_id": "6580819fc0e044dbac5aa7ce",
                "penulis_id": "6553230529e026ca0e96884f",
                "forum_id": "658080fdc0e044dbac5aa17e",
                "content": "uangnya darimana tuch",
                "replies": [
                    {
                        "penulis_id": "65807dbac0e044dbac5a626e",
                        "content": "dari bapak lu",
                        "_id": "65808269c0e044dbac5acc41",
                        "created_at": "2023-12-18T17:33:29.554Z",
                        "user": {
                            "name": "Wafi",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "65807dbac0e044dbac5a626e",
                        "content": "dari bapak lu",
                        "_id": "6580826ac0e044dbac5acc46",
                        "created_at": "2023-12-18T17:33:30.054Z",
                        "user": {
                            "name": "Wafi",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "65807dbac0e044dbac5a626e",
                        "content": "dari bapak lu",
                        "_id": "6580826bc0e044dbac5acc4f",
                        "created_at": "2023-12-18T17:33:31.219Z",
                        "user": {
                            "name": "Wafi",
                            "roles": "user"
                        }
                    },
                    {
                        "penulis_id": "6553230529e026ca0e96884f",
                        "content": "bapak lu aja",
                        "_id": "658082dac0e044dbac5ad672",
                        "created_at": "2023-12-18T17:35:22.666Z",
                        "user": {
                            "name": "cappucino",
                            "roles": "user"
                        }
                    }
                ],
                "created_at": "2023-12-18T17:30:07.938Z",
                "__v": 5,
                "user": {
                    "name": "cappucino",
                    "roles": "user"
                }
            },
            {
                "_id": "6580825ac0e044dbac5acbb1",
                "penulis_id": "65807dbac0e044dbac5a626e",
                "forum_id": "658080fdc0e044dbac5aa17e",
                "content": "setuju bangetisi kalo gada yang korupsi psti bisa tuh terealisasi",
                "replies": [],
                "created_at": "2023-12-18T17:33:14.943Z",
                "__v": 0,
                "user": {
                    "name": "Wafi",
                    "roles": "user"
                }
            },
            {
                "_id": "658082e9c0e044dbac5ad9ea",
                "penulis_id": "65807ff5c0e044dbac5a7fc3",
                "forum_id": "658080fdc0e044dbac5aa17e",
                "content": "yakin bisa terlaksana?",
                "replies": [],
                "created_at": "2023-12-18T17:35:37.572Z",
                "__v": 0,
                "user": {
                    "name": "Ganjar",
                    "roles": "user"
                }
            },
            {
                "_id": "6580841ac0e044dbac5af545",
                "penulis_id": "6580836cc0e044dbac5ae11c",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "masih putaran pertama",
                "replies": [],
                "created_at": "2023-12-18T17:40:42.320Z",
                "__v": 0,
                "user": {
                    "name": "haliputri",
                    "roles": "user"
                }
            },
            {
                "_id": "65813b2e2a9f78caea9c1f3e",
                "penulis_id": "65813a742a9f78caea9c166e",
                "forum_id": "658078d8c0e044dbac5a535a",
                "content": "seru banget",
                "replies": [],
                "created_at": "2023-12-19T06:41:50.694Z",
                "__v": 0,
                "user": {
                    "name": "kursi",
                    "roles": "user"
                }
            },
            {
                "_id": "6595851f8e26b19aa972ff8d",
                "penulis_id": "654bab4e1d8047f787a1736e",
                "forum_id": "65733930862287e450302b5d",
                "content": "Test Comment",
                "replies": [],
                "created_at": "2024-01-03T16:02:39.833Z",
                "__v": 0,
                "user": {
                    "name": "Admin User",
                    "roles": "admin"
                }
            },
            {
                "_id": "6595888957c58b0e7a8b86bd",
                "penulis_id": "654bab4e1d8047f787a1736e",
                "forum_id": "65733930862287e450302b5d",
                "content": "Test Comment",
                "replies": [],
                "created_at": "2024-01-03T16:17:13.134Z",
                "__v": 0,
                "user": {
                    "name": "Admin User",
                    "roles": "admin"
                }
            }
        ])
    }, 15000)


    it('should create a new comment', async () => {
        const newComment = {
            "forum_id": "65733930862287e450302b5d",
            "penulis_id": "654bab4e1d8047f787a1736e",
            "content": "Test Comment"
        }
        const response = await request(app)
            .post('/comments')
            .send(newComment)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "content": expect.stringContaining("Test Comment")
        }))
    }, 10000)

    it('should not create a new comment without forum_id', async () => {
        const newComment = {
            "penulis_id": "654bab4e1d8047f787a1736e",
            "content": "Test Comment"
        }
        const response = await request(app)
            .post('/comments')
            .send(newComment)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Comment validation failed: forum_id: Path `forum_id` is required."
            }
        )
    }, 3000)

    it('should not create a new comment without penulis_id', async () => {
        const newComment = {
            "forum_id": "65733930862287e450302b5d",
            "content": "Test Comment"
        }
        const response = await request(app)
            .post('/comments')
            .send(newComment)

        expect(response.status).toBe(404)
        expect(response.body).toEqual(
            {
                "message": "User not found."
            }
        )
    }, 3000)

    it('should not create a new comment without content', async () => {
        const newComment = {
            "forum_id": "65733930862287e450302b5d",
            "penulis_id": "654bab4e1d8047f787a1736e",
            "content": ""
        }
        const response = await request(app)
            .post('/comments')
            .send(newComment)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Comment validation failed: content: Path `content` is required."
            }
        )
    }, 3000)


    it('should update a comment by ID', async () => {
        const comment_id = "6595888957c58b0e7a8b86bd"
        const updateComment = {
            "content": "Test Delete content"
        }
        const response = await request(app)
            .put(`/comments/${comment_id}`)
            .send(updateComment)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.objectContaining({
            "content": expect.stringContaining("Test Delete content")
        }))
    }, 5000)


    it('should delete a comment by ID', async () => {
        const comment_id = "6595888957c58b0e7a8b86bd"
        const response = await request(app).delete(`/comments/${comment_id}`)
        expect(response.status).toBe(200)
    }, 5000)

    it('should not delete a comment by invalid ID', async () => {
        const comment_id = "657728539011896d9bba06"
        const response = await request(app).delete(`/comments/${comment_id}`)
        expect(response.status).toBe(500)
    }, 3000)
})



const replyAPI = describe('Reply API', () => {
    it('should get all replies by penulis_id', async () => {
        const penulisId = "65807dbac0e044dbac5a626e";
        const response = await request(app).get(`/replies-by-author/${penulisId}`)
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            {
                "parentComment": {
                    "_id": "65807d06c0e044dbac5a5e48",
                    "penulis_id": "655331c329e026ca0e96885f",
                    "forum_id": "65807b4dc0e044dbac5a57c7",
                    "content": "ehh iya cuy takut ada yg ngehack",
                    "created_at": "2023-12-18T17:10:30.214Z",
                    "__v": 2,
                    "user": {
                        "name": "mukena",
                        "roles": "user"
                    }
                },
                "reply": {
                    "penulis_id": "65807dbac0e044dbac5a626e",
                    "content": "lebih takut rafa",
                    "_id": "65807f02c0e044dbac5a757d",
                    "created_at": "2023-12-18T17:18:58.054Z",
                    "user": {
                        "name": "Wafi",
                        "roles": "user"
                    }
                }
            },
            {
                "parentComment": {
                    "_id": "6580819fc0e044dbac5aa7ce",
                    "penulis_id": "6553230529e026ca0e96884f",
                    "forum_id": "658080fdc0e044dbac5aa17e",
                    "content": "uangnya darimana tuch",
                    "created_at": "2023-12-18T17:30:07.938Z",
                    "__v": 5,
                    "user": {
                        "name": "cappucino",
                        "roles": "user"
                    }
                },
                "reply": {
                    "penulis_id": "65807dbac0e044dbac5a626e",
                    "content": "dari bapak lu",
                    "_id": "65808269c0e044dbac5acc41",
                    "created_at": "2023-12-18T17:33:29.554Z",
                    "user": {
                        "name": "Wafi",
                        "roles": "user"
                    }
                }
            },
            {
                "parentComment": {
                    "_id": "6580819fc0e044dbac5aa7ce",
                    "penulis_id": "6553230529e026ca0e96884f",
                    "forum_id": "658080fdc0e044dbac5aa17e",
                    "content": "uangnya darimana tuch",
                    "created_at": "2023-12-18T17:30:07.938Z",
                    "__v": 5,
                    "user": {
                        "name": "cappucino",
                        "roles": "user"
                    }
                },
                "reply": {
                    "penulis_id": "65807dbac0e044dbac5a626e",
                    "content": "dari bapak lu",
                    "_id": "6580826ac0e044dbac5acc46",
                    "created_at": "2023-12-18T17:33:30.054Z",
                    "user": {
                        "name": "Wafi",
                        "roles": "user"
                    }
                }
            },
            {
                "parentComment": {
                    "_id": "6580819fc0e044dbac5aa7ce",
                    "penulis_id": "6553230529e026ca0e96884f",
                    "forum_id": "658080fdc0e044dbac5aa17e",
                    "content": "uangnya darimana tuch",
                    "created_at": "2023-12-18T17:30:07.938Z",
                    "__v": 5,
                    "user": {
                        "name": "cappucino",
                        "roles": "user"
                    }
                },
                "reply": {
                    "penulis_id": "65807dbac0e044dbac5a626e",
                    "content": "dari bapak lu",
                    "_id": "6580826bc0e044dbac5acc4f",
                    "created_at": "2023-12-18T17:33:31.219Z",
                    "user": {
                        "name": "Wafi",
                        "roles": "user"
                    }
                }
            }
        ])
    }, 15000)


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
    }, 10000)

    it('should not add reply of a comment by invalid comment_id', async () => {
        const comment_id = "657728539011896d9bba0"
        const addReply = {
            "penulis_id": "6552140effe27231eab2ce63",
            "content": "test reply comment"
        }
        const response = await request(app)
            .post(`/comments/${comment_id}/replies`)
            .send(addReply)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(
            {
                "message": "Cast to ObjectId failed for value \"657728539011896d9bba0\" (type string) at path \"_id\" for model \"Comment\""
            }
        )
    }, 3000)

    it('should not add reply of a comment by unregistered comment_id', async () => {
        const comment_id = "657728539011896d9bba068c"
        const addReply = {
            "penulis_id": "6552140effe27231eab2ce63",
            "content": "test reply comment"
        }
        const response = await request(app)
            .post(`/comments/${comment_id}/replies`)
            .send(addReply)

        expect(response.status).toBe(404)
        expect(response.body).toEqual(
            {
                "message": "Comment not found."
            }
        )
    }, 3000)

    it('should not add reply of a comment without penulis_id', async () => {
        const comment_id = "657728539011896d9bba068d"
        const addReply = {
            "content": "test reply comment"
        }
        const response = await request(app)
            .post(`/comments/${comment_id}/replies`)
            .send(addReply)

        expect(response.status).toBe(404)
        expect(response.body).toEqual(
            {
                "message": "User not found."
            }
        )
    }, 3000)

    it('should not add reply of a comment without content', async () => {
        const comment_id = "657728539011896d9bba068d"
        const addReply = {
            "penulis_id": "6552140effe27231eab2ce63"
        }
        const response = await request(app)
            .post(`/comments/${comment_id}/replies`)
            .send(addReply)

        expect(response.status).toBe(500)
        expect(response.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Comment validation failed: replies.2.content: Path `content` is required.")
        }))
    }, 3000)


    it('should update reply of a comment', async () => {
        const comment_id = "657728539011896d9bba068d"
        const replyId = "6595888e57c58b0e7a8b86f0"
        const updateReply = {
            "content": "Updated test reply content"
        }
        const response = await request(app)
            .put(`/comments/${comment_id}/${replyId}`)
            .send(updateReply)
        
        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.objectContaining({
            "content": expect.stringContaining("Updated test reply content")
        }))
    }, 5000);


    it('should delete reply of a comment', async () => {
        const comment_id = "657728539011896d9bba068d"
        const replyId = "6595888e57c58b0e7a8b86f0"
        const response = await request(app).del(`/comments/${comment_id}/${replyId}`)
        expect(response.status).toBe(200)
    }, 5000);

    it('should not delete reply of a comment by invalid comment_id or reply_id', async () => {
        const comment_id = "657728539011896d9bba0"
        const replyId = "657729c02ad0243107688e90"
        const response = await request(app).del(`/comments/${comment_id}/${replyId}`)
        expect(response.status).toBe(500)
    }, 3000);
})
