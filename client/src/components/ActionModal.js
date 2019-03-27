import React, { Component } from 'react';
import {
    Button,
    Container,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    // Label,
    // Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addAction } from '../actions/actionActions';
import PropTypes from 'prop-types';

class ActionModal extends Component {
    state = {
        modal: false,
        type: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = e => {
        e.persist();
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.onSubmit(e);
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const newAction = {
            type: this.state.type,
            User: this.props.user._id || this.props.user.id
        }
        
        // Add action via addAction action
        this.props.addAction(newAction);

        // Close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                { this.props.isAuthenticated ? (
                    <Container>
                        <Row>
                            <Col xs={{ size: 4, offset: 4}}>
                                <Button
                                color="dark"
                                size="lg"
                                block
                                onClick={this.toggle}
                                >Alarm</Button>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <Container>
                        <Row>
                            <Col>
                                <h4 className="mb-3 ml-4 text-center">Please Login to Manage Alarm</h4>
                            </Col>
                        </Row>
                    </Container>
                )}

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Actions</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                {/* <Label for="action">Action</Label>
                                <Input
                                type="text"
                                name="type"
                                id="action"
                                placeholder="Activate/Deactivate"
                                onChange={this.onChange}
                                /> */}

                                <div className="row">
                                    <div className="col">
                                        <Button
                                        name="type"
                                        value="Activate"
                                        color="warning"
                                        block
                                        onClick={this.onClick}
                                        >Activate</Button>
                                    </div>

                                    <div className="col">
                                        <Button
                                        name="type"
                                        value="Deactivate"
                                        color="danger"
                                        block
                                        onClick={this.onClick}
                                        >Deactivate</Button>
                                    </div>

                                </div>
                                {/* <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block>Add Action</Button> */}
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    action: state.action,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(mapStateToProps, { addAction })(ActionModal);