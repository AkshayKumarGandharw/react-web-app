import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import './clienttest.css';


function Client_testimonials() {
    const client=[
        {
        image:"fa-regular fa-circle-user fs-2",
        para:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
        subheading:"- Carly Ferris, Strews Inc"
        },
        {
        image:"fa-regular fa-circle-user fs-2",
        para:"Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
        subheading:"- Imani Olowe, Golstra Inc"
        },
        {
            image:"fa-regular fa-circle-user fs-2",
            para:"Boost your product and service's credibility by adding testimonials from your clients.",
            subheading:"- Neil Tran, Henlow Express"
            }

    ]
    const Mycontent=({client})=>{
            return(
                <Col className='d-flex'>
                    <div className='mybox'>
                    <span><i class={client.image}></i></span>
                    <p>{client.para}</p>
                    <h4>{client.subheading}</h4>
                    </div>
                </Col>
            )
    }
    return (
        <section id="client_testimonial">
            <Container>
                <Row>
                    <Col className='col-lg-4'></Col>
                    <Col className='col-lg-4'>
                        <h2>Client Testimonials</h2>
                        <p>Boost your product and service's credibility by adding testimonials from your clients.</p>
                    </Col>
                </Row>
                <Row>
                    {
                        // map fuction execute
                        client.map((item,index)=>{
                            return <Mycontent  client={item} key={index}/>
                        })
                    }

                </Row>
            </Container>

        </section>
    )
}

export default Client_testimonials