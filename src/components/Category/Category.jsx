import React from 'react'
import './Category.scss'
import { Link } from 'react-router-dom'

function Category() {
    return (
        <div className='category'>
            <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Categories</h1>
            <div className="wrapper">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/14859567/pexels-photo-14859567.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <button>
                            <Link className='link' to='products/1'>
                                New Season
                            </Link>
                        </button>
                    </div>
                    <div className="row">
                        <img
                            src="https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                          <button>
                            <Link className='link' to='products/1'>
                                Women
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img
                            src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt=""
                        />
                          <button>
                            <Link className='link' to='products/1'>
                                Men
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="col col-l">
                    <div className="row">
                        <div className="col">
                            <div className="row"> <img
                                src="https://images.pexels.com/photos/4484876/pexels-photo-4484876.jpeg?auto=compress&cs=tinysrgb&w=600"
                                alt=""
                            />
                              <button>
                            <Link className='link' to='products/1'>
                                Children
                            </Link>
                        </button></div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <img
                                    src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                  <button>
                            <Link className='link' to='products/1'>
                                Men
                            </Link>
                        </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <img
                                    src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                  <button>
                            <Link className='link' to='products/1'>
                                Accessories
                            </Link>
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
