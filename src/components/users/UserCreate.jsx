import React from "react";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

import { Form, FormControl, Button } from "react-bootstrap";

const UserCreate = () => {
    const [user, setUser] = useState({
        name: "",
        position: "",
        expiriens: "",
        // favorite: false,
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function addUsers() {
        for (let key in user) {
            if (!user[key]) {
                alert("");
                return;
            }
        }
        dispatch(addUser({ ...user, favorite: false }));

        navigate("/list");
    }

    return (
        <div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="m-5">Create User</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="user name"
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                        value={user.name}
                    />
                </Form.Group>

                <Form.Group className="m-5">
                    <FormControl
                        type="text"
                        placeholder="user position"
                        onChange={(e) =>
                            setUser({ ...user, position: e.target.value })
                        }
                        value={user.position}
                    />
                </Form.Group>

                <Form.Group className="mb-5">
                    <FormControl
                        type="text"
                        placeholder="user num"
                        onChange={(e) =>
                            setUser({ ...user, expiriens: e.target.value })
                        }
                        value={user.expiriens}
                    />
                </Form.Group>
                <Button variant="dark" onClick={addUsers} className="mt-5">
                    Add User
                </Button>
            </div>
        </div>
    );
};

export default UserCreate;
