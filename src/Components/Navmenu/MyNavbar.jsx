
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './mynavbar.css';
import Menujson from '../../Menujson/Menu.json';

function NavScroll() {

  function JsonMenu({item}){
    return(
        <>
           <Link className='nav-link' to={item.link}>{item.label}</Link> 
        </>
    );
  }
function MysecondMenu({item}){
  return(
    <>
        <NavDropdown title={item.label}>
              {
                item.dropdownMenu.map((item,index)=>{
                  return <Link to={item.link} className='dropdown-item'>{item.label}</Link>
                })
              }
        </NavDropdown>
    </>
  );

}

  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid className='mycontainer'>
        <Navbar.Brand href="#">
          <img src="logo192.png" alt=""  width="50px" height="50px"/>
          
          </Navbar.Brand>
         
        <Navbar.Toggle aria-controls="navbarScroll" className='bg-light' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
             navbarScroll
          >
            
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
           
           {/* <Link className='nav-link' to="/" >Home</Link>
           <Link className='nav-link' to="/aboutus" >About Us</Link>
           <Link className='nav-link' to="/service" >Service</Link>
           <Link className='nav-link' to="/contactus" >Contact Us</Link>
           <Link className='nav-link' to="/gallery" >Gallery</Link> */}

           {
              Menujson.map((item,index)=>{
                if(item.isDropdown == true){
                    return <MysecondMenu item={item} key={index}/>
                }
                else{

                  return <JsonMenu item={item} key={index}/>
                }
                //<Link className='nav-link' item1={item.link} key={index}>{item.label}</Link>
              })

              
           }
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;