import { db } from 'api/src/lib/db'
import { faker } from '@faker-js/faker'

export default async () => {
  try {
    const postData = []
    for (let i = 0; i < 100; i++) {
      postData.push({
        title: faker.lorem.sentence(2),
        content: faker.lorem.paragraphs(3, '\n'),
      })
    }
    await db.post.createMany({ data: postData })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
