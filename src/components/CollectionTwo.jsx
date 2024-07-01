import { Button } from 'antd'
import React from 'react'

const CollectionTwo = () => {
    return (
        <div className=''>
            <div className="mt-12">
                <div className="flex flex-col lg:flex-row items-center justify-center ">
                    <div className='w-1/2'>
                        <h1 className="text-8xl text-black font-bold text-start">Get Premium Watch</h1>
                        <p className="py-6 text-start">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <div className='flex justify-start'>
                            <Button type="dark" className="bg-black px-20 py-5 text-white">Get Started</Button>
                        </div>
                    </div>
                    <div className=''>
                        <img
                            src="https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009684.00/importer/watch.png.transform.appdpmain.png"
                            className="w-1/2 mx-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionTwo