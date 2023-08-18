import React, { useEffect } from "react";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOneUser, editUser, cleanOneUser } from "../../store/userSlice";

import { addUser } from "../../store/userSlice";
import { Form, FormControl, Button } from "react-bootstrap";
import { editUserAfterLiked } from "../../store/userSlice";

const UseEdit = () => {
    let { oneUser } = useSelector((state) => state.users);
    const [user, setUser] = useState(oneUser);
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneUser(id));
        return () => dispatch(cleanOneUser());
    }, []);
    // console.log(user);

    return (
        <div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className="m-5">Edit User</Form.Label>
                    <FormControl
                        type="text"
                        placeholder="uesr name"
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                        value={user.name}
                    />
                </Form.Group>

                <Form.Group className="m-5">
                    <FormControl
                        type="text"
                        placeholder="uesr position"
                        onChange={(e) =>
                            setUser({ ...user, position: e.target.value })
                        }
                        value={user.position}
                    />
                </Form.Group>

                <Form.Group className="mb-5">
                    <FormControl
                        type="text"
                        placeholder="uesr num"
                        onChange={(e) =>
                            setUser({ ...user, expiriens: e.target.value })
                        }
                        value={user.expiriens}
                    />
                </Form.Group>
                <Button
                    variant="dark"
                    onClick={() => {
                        dispatch(editUser(user));
                        dispatch(editUserAfterLiked(user));
                        console.log(user);
                        navigate("/list");
                    }}>
                    Add User
                </Button>
            </div>
        </div>
    );
};

export default UseEdit;
