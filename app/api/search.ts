import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://openapi.naver.com/v1/datalab/search'
  const headers = {
    'X-Naver-Client-Id': 'QIEnxbDuC5h2ZNzuCuJJ',
    'X-Naver-Client-Secret': '2fd6K_II_G',
    'Content-Type': 'application/json',
  }
  const body = JSON.stringify({
    startDate: '2017-01-01',
    endDate: '2017-04-30',
    timeUnit: 'month',
    keywordGroups: [
      {
        groupName: '한글',
        keywords: ['한글', 'korean'],
      },
      {
        groupName: '영어',
        keywords: ['영어', 'english'],
      },
    ],
    device: 'pc',
    ages: ['1', '2'],
    gender: 'f',
  })
  console.log('111:', 2222)
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: body,
  })

  const data = await response.json()

  console.log('??:', data)

  res.status(200).json(data)
}

export default handler
