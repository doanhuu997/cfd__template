import React, { useEffect, useState } from 'react'


export default function Courses() {
    let [state, setState] = useState({
        gallery: [],
        online: [],
        offline: [],
        loading: true
    })
    useEffect(() => {
        fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/courses')
            .then(res => res.json())
            .then((res) => {

                setState({
                    ...res,
                    loading: false
                })

            })
    })
    if (state.loading) {
        return 'Loading..........'
    }
    return (

        <main className="homepage" id="main">
            <section className="section-1">
                <div className="container">
                    <h2 className="main-title">KHÓA HỌC CFD</h2>
                    <p className="top-des">
                        The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
                        has
                        a more-or-less normal
            </p>
           
                </div>
            </section>

        </main>

    )
}