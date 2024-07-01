import React from 'react'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const NewArrivals = () => {
    return (
        <div>
            <h1 className='text-center mt-12 text-5xl font-bold text-black underline'>Categories</h1>
            <div className='flex justify-center gap-x-20 mt-12 flex-col lg:flex-row items-center'>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={
                        <img
                            alt="example"
                            className=''
                            src="https://odo-cdn.imgix.net/catalog/product/168/242/1682429296.6733.png?auto=compress,format&w=800&h=800&bg=fff&fit=fill"
                        />
                    }
                >
                    <h1 className='text-xl font-medium'>Sports Watch</h1>
                </Card>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={
                        <img
                            alt="example"
                            src="https://www.jbhifi.com.au/cdn/shop/products/613448-Product-0-I-638043794246115496.jpg?v=1668743094"
                        />
                    }
                >
                    <h1 className='text-xl font-medium'>Smart Watches</h1>
                </Card>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={
                        <img
                            alt="example"
                            src="https://static-01.daraz.pk/p/47c2beb3ae6428dd85b63ead529d7a78.jpg_750x400.jpg_.webp"
                        />
                    }
                >
                    <h1 className='text-xl font-medium'>Luxury Watches</h1>
                </Card>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    cover={
                        <img
                            alt="example"
                            src="https://media.e-valy.com/cms/products/images/5308832a-8b99-496a-be47-97a0c51710d9?h=350&w=350"
                        />
                    }
                >
                    <h1 className='text-xl font-medium'>Casual Watches</h1>
                </Card>
                <Card
                    hoverable
                    style={{ width: 200 }}
                    className='overflow-hidden'
                    cover={
                        <img
                            alt="example"
                            src="https://www.baltany.com/img/shop/upload/8-1.jpg"
                        />
                    }
                >
                    <h1 className='text-xl font-medium'>Dive Watches</h1>
                </Card>
            </div>
        </div>
    )
}

export default NewArrivals