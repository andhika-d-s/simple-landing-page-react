import React, { Component } from 'react'

export class ListProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: [
                {
                    img: 'https://www.elmundoeats.com/wp-content/uploads/2017/11/Roti-Canai-3.jpg',
                    name: "Canai Bread",
                    price: 35000,
                },
                {
                    img: 'https://cdn.pixabay.com/photo/2016/10/22/17/10/bread-1761197_960_720.jpg',
                    name: "Baguette Bread",
                    price: 30000,
                },
                {
                    img: 'https://cdn.pixabay.com/photo/2013/04/07/21/30/bread-101636_960_720.jpg',
                    name: "Sweet Croissant",
                    price: 20000,
                },
                {
                    img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20191219-seo-bagel-recipe-delish-ehg-8845-1578412004.jpg?crop=1.00xw:0.716xh;0,0.249xh&resize=480:*',
                    name: "Sweety Bagel Bread",
                    price: 17000,
                },
            ]
        }
    }
    render() {
        return (
            <div className="list-product">
                    {
                        this.state.product.map((data, index) => {
                            return (
                            <div key={index} className="card-product">
                                <div className="image-product">
                                    <img src={data.img} alt={data.name}/>
                                </div>
                                <p className="price-product">Rp. {data.price}</p>
                                <p className="name-product">{data.name}</p>
                            </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default ListProduct
