import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0
        }
    }
     updateState = ()=> {
        
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        return (
            <>
                <Card>
                    <Card.Img variant="top" src={this.props.imageUrl} alt='' title='' style={{ width: '18rem' }} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>❤️ favorites = {this.state.counter}</Card.Text>
                        <Button onClick={this.updateState} variant="outline-primary"
                        style={{width:"100px", borderStyle:"double", marginTop:"10px",height:"20px", backgroundColor:"blueviolet" }}>Vote</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Gallery