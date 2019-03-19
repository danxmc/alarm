import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
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
                    <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                    >Alarm</Button>
                ) : (
                    <h4 className="mb-3 ml-4">Please Login to manage alarm</h4>
                )}

                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Acciones</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="action">Action</Label>
                                <Input
                                type="text"
                                name="type"
                                id="action"
                                placeholder="Activate/Deactivate"
                                onChange={this.onChange}
                                />
                                <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block>Add Action</Button>
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