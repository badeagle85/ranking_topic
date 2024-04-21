'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    fetch('/api/search')
      .then((response) => response.json())
      .then((data) => console.log(data))
      // .then((data) => setApiData(data))
      .catch((error) => console.error('Error:', error))
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="mb-8">
        <div className="rounded-2xl">
          <div>
            <div className="flex justify-between items-center px-2 py-4">
              <h3 className="font-medium text-black dark:text-white">인기글</h3>
              <a
                className="font-medium text-black dark:text-white"
                href="/post/list"
              >
                <div className="flex font-bold">더보기</div>
              </a>
            </div>
            <div className="p-4">
              <div className="grid gap-4 grid-cols-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((question) => (
                  <div key={question}>
                    <button className="flex w-full items-center gap-1.5 sm:gap-3 xl:gap-6 ">
                      <div>{question}.</div>
                      <div>
                        <h4 className="text-left text-title-xsm font-medium text-black dark:text-white">
                          How long we deliver your first blog post?
                        </h4>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* 영역 */}
        <div className="rounded-2xl">
          <div>
            <div className="flex justify-between items-center px-2 py-4">
              <h3 className="font-medium text-black dark:text-white">
                언론사별 가장 많이 본 뉴스
              </h3>
              <a
                className="font-medium text-black dark:text-white"
                href="/post/list"
              >
                <div className="flex font-bold">더보기</div>
              </a>
            </div>
            <div>
              <div className="grid gap-4 grid-cols-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((question) => (
                  <div
                    className="bg-white rounded shadow-md flex card text-grey-darkest"
                    key={question}
                  >
                    <Image
                      className="w-1/2 h-full rounded-l-sm"
                      src="https://bit.ly/2EApSiC"
                      width={128}
                      height={60}
                      alt="Room Image"
                    />
                    <div className="w-full flex flex-col">
                      <div className="p-4 pb-0 flex-1">
                        <h3 className="font-light mb-1 text-grey-darkest">
                          Tower Hotel
                        </h3>
                        <div className="text-xs flex items-center mb-4">
                          <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                          Soho, London
                        </div>
                        <div className="flex items-center mt-4">
                          <div className="pr-2 text-xs">
                            <i className="fas fa-wifi text-green"></i> Free WiFi
                          </div>
                          <div className="px-2 text-xs">
                            <i className="text-grey-darker far fa-building"></i>{' '}
                            2mins to center
                          </div>
                        </div>
                      </div>
                      <div className="bg-grey-lighter p-3 flex items-center justify-between transition hover:bg-grey-light">
                        Book Now
                        <i className="fas fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
