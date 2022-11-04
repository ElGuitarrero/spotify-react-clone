import './css/barraLateral.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


function BarraLateral() {
    return(
        <div className='navegacion'>
            <img src='./assets/images/spotify.png' style={{ margin: 'auto', paddingBottom: '40px'}}></img>


            <LinkNavegacion nombre='Home' iconoLink='home.png' />
            <LinkNavegacion nombre='Search' iconoLink='search.png' />
            <LinkNavegacion nombre='Your Library' iconoLink='library.png' />
        </div>
    )
}

function LinkNavegacion( { nombre,iconoLink }) {
    return(
        <div className='linkNavegacion'>
            <img src={'./assets/images/icons/' + iconoLink} style={{width: '40px', height: '40px'}}/>
            <a href='' className='linkA'>{nombre}</a>
        </div>
    )
}

function NavBarra () {


    return(
        <Row style={ {height: '64px', backgroundColor: '#101010'}}>
            <Col lg={1} style={{color: 'white', margin: 'auto 0px'} }>{'<'}</Col>
            <Col lg={1} className='botonxd'>{'>'}</Col>


        </Row>
    )
}



function MainPage() {



    return(
        <Row>
            <Col lg={2} className='barraLat'><BarraLateral/></Col>
            <Col lg={10}>
                <NavBarra></NavBarra>
            </Col>
            
        </Row>
    )
}


export default MainPage;



