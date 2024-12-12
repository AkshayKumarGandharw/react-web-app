import React from 'react';
import './learning.css';
import { Container,Row,Col } from 'react-bootstrap';


function Learning() {

    const learn=[
        {
            icon: "fa-regular fa-circle-down fs-2 ",
            heading:" 100% project based learning",
            para:"we build more than 2 real world major projects in each language and don't worry that the project dev.."
        },
        {
         
            icon: "fa-regular fa-circle-down fs-2 ",
            heading:"Live call supports",
            para:"After joining our course you will get a lot of coding problems because our course is 100% project ba.."
        },
        {
            icon: "fa-regular fa-circle-down fs-2 ",
            heading:"High change of selection",
            para:"if you will do hard works, And if you will be follow our instruction High chnage of selections..."
        },
        {
         
            icon: "fa-regular fa-circle-down fs-2 ",
            heading:"Video Access Timing",
            para:"You can access our videos 24*7 life time, Once you complete your registration...."
        }
        
    ];
    const Learncontent = ({learn})=>{
        return(
            <Row id='learn-row'>
             <Col className='col-lg-1' ></Col>
             <Col className='col-lg-1' id='col-1'>
                <span><i class={learn.icon}></i></span>
            </Col>
            <Col className='col-lg-10'>
                <h3>{learn.heading}</h3>
                <p>{learn.para}</p>
             </Col>
            </Row>

        )
    }

  return (
    <section id="learning_section">
        <Container>
            <Row>
                <Col className='col-lg-6'>
                    <h3>Benifits of learning from</h3>
                    
                    {
                        //map function execute
                        learn.map((item,index)=>{
                            return <Learncontent learn={item} key={index}/>
                        })
                    }
                </Col>
                <Col className='col-lg-6'>
                    <div className="img-div">
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Learning
