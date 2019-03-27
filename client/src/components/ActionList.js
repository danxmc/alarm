import React, { Component } from 'react';
import { Container, Col, Row, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getActions, deleteAction } from '../actions/actionActions';
import PropTypes from 'prop-types';

class ActionList extends Component {
    static propTypes = {
        getActions: PropTypes.func.isRequired,
        action: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object
    }

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
                <Row>
                    <Col>
                        <ListGroup>
                            <TransitionGroup className='action-list'>
                                { actions.map(({ _id, type, date, User }) => (
                                    <CSSTransition key={_id} timeout={500} classNames='fade'>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>
                                                { this.props.isAuthenticated && this.props.user.role === 'admin' ? (
                                                    <Button
                                                    className="remove-btn"
                                                    color="danger"
                                                    size="sm"
                                                    onClick={this.onDeleteClick.bind(this, _id)}
                                                    >&times;</Button>
                                                ) : (
                                                null
                                                )}
                                                {type}
                                            </ListGroupItemHeading>
                                            <ListGroupItemText>
                                                By <i>{User.name}</i> on {new Date(date).toLocaleString('es-MX', {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric'})}
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    action: state.action,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { getActions, deleteAction })(ActionList);