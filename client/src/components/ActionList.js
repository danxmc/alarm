import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getActions, deleteAction } from '../actions/actionActions';
import PropTypes from 'prop-types';

class ActionList extends Component {

    componentDidMount() {
        this.props.getActions();
    }

    onDeleteClick = id => {
        this.props.deleteAction(id);
    }

    render() {
        const { actions } = this.props.action;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className='action-list'>
                        {actions.map(({ _id, type }) => (
                            <CSSTransition key={_id} timeout={500} classNames='fade'>
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
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
    action: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    action: state.action
});

export default connect(mapStateToProps, { getActions, deleteAction })(ActionList);