import { Container} from 'react-bootstrap';
import './../App.css';
function Create(){
    return(
        <>
        <div className="bgbackground">
            <div className="spacer">
                <Container>
                    <div className='create_info'>
                    <h1>Let's Create Something Together</h1>
                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor,</p>
                    <p>nisi elit consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
                    <div className="create_button">
                        <a href="#" className="theme_btn">CONTACT US</a>
                    </div>
                    </div>
                </Container>
            </div>
        </div>
        </>
    )
}
export default Create;