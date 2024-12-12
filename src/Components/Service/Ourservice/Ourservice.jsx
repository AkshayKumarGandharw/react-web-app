import React from 'react';
import './ourservice.css';
import { Container,Row,Col } from 'react-bootstrap';

function Ourservice() {
  const ourservice = [
      {
        icon :"fa-solid fa-film fs-2",
        heading :"BUSINESS MODEL",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam dicta iusto enim dolor at fugit nostrum dolorum. Nobis fugit saepe nostrum obcaecati, magnam natus qui. Delectus, provident! Non, explicabo?"
      },
      {
        icon :"fa-solid fa-square-poll-vertical fs-2",
        heading :"BUSINESS EXECUTION",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam dicta iusto enim dolor at fugit nostrum dolorum. Nobis fugit saepe nostrum obcaecati, magnam natus qui. Delectus, provident! Non, explicabo?"
      },
      {
        icon :"fa-solid fa-lightbulb fs-2",
        heading :"BUSINESS MONITORING",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quisquam dicta iusto enim dolor at fugit nostrum dolorum. Nobis fugit saepe nostrum obcaecati, magnam natus qui. Delectus, provident! Non, explicabo?"
      }
      
  ]
  function OurserviceMap({ourservice}){
      return(
        <>
          <Col className='col-lg-4'>
          <div className="content-div">
                <span><i class={ourservice.icon}></i></span>
                <h3>{ourservice.heading}</h3>
                <p>{ourservice.para}</p>
          </div>
            </Col>
        </>
      )
  }
  return (
    <section id='ourservice_section'>
      <Container>
        <Row>
          <Col>
          <h2>Our Service</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eius in dolor, facilis laborum officiis itaque quidem soluta expedita aliquid facere quod sint alias laudantium ea nihil ex assumenda inventore.</p>
          </Col>
        </Row>
        <Row>
            {
              // execute map function
              ourservice.map((item,index)=>{
                return <OurserviceMap ourservice={item} key={index}/>
              })
            }
            
        </Row>
      </Container>

    </section>
  )
}

export default Ourservice