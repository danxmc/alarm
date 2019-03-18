import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ActionList extends Component {
    state = {
        items: [
            {id: uuid(), type: 'activado'},
            {id: uuid(), type: 'desactivado'},
            {id: uuid(), type: 'activado'},
            {id: uuid(), type: 'desactivado'}
        ]
    }

    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const type = prompt('Enter Action');
                    if(type) {
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), type }]
                        }));
                    }
                }}
                >Add Action</Button>

                <ListGroup>
                    <TransitionGroup className='action-list'>
                        {items.map(({ id, type }) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {type}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default ActionList;