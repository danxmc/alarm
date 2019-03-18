import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getActions } from '../actions/actionActions';
import PropTypes from 'prop-types';

class ActionList extends Component {

    componentDidMount() {
        this.props.getActions();
    }
    
    render() {
        const { actions } = this.props.action;
        return(
            <Container>
                <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const type = prompt('Enter Action');
                    if(type) {
                        this.setState(state => ({
                            items: [...state.actions, { id: uuid(), type }]
                        }));
                    }
                }}
                >Add Action</Button>

                <ListGroup>
                    <TransitionGroup className='action-list'>
                        {actions.map(({ id, type }) => (
                            <CSSTransition key={id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                actions: state.actions.filter(action => action.id !== id)
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

ActionList.propTypes = {
    getActions: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    action: state.action
});

export default connect(mapStateToProps, { getActions })(ActionList);