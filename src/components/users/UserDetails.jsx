import React, { useEffect } from "react";
import { Card, ListGroup, Spinner, Button } from "react-bootstrap";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser, cleanOneUser } from "../../store/userSlice";

import { deteleUser } from "../../store/userSlice";

import { editUser } from "../../store/userSlice";

import { deleteAfterLiked } from "../../store/userSlice";

import { editAfterLiked } from "../../store/userSlice";

const UserDetails = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let { oneUser } = useSelector((state) => state.users);
    let { id } = useParams();

    useEffect(() => {
        dispatch(getOneUser(id));
        return () => dispatch(cleanOneUser());
    }, []);

    return (
        <div className="w-100 d-flex flex-column justify-content-center align-items-center mt-5">
            {oneUser ? (
                <Card style={{ width: "18rem" }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{oneUser.name}</ListGroup.Item>
                        <ListGroup.Item>{oneUser.position}</ListGroup.Item>
                        <ListGroup.Item>{oneUser.exp}</ListGroup.Item>
                    </ListGroup>
                    <div className="d-flex justify-content-evenly">
                        <Button
                            variant="dark"
                            onClick={() => (
                                console.log(oneUser.id),
                                dispatch(deteleUser(oneUser.id)),
                                dispatch(deleteAfterLiked(oneUser.id)),
                                navigate("/list")
                            )}>
                            Delete
                        </Button>
                        <Button
                            variant="dark"
                            onClick={() => {
                                navigate(`/edit/${oneUser.id}`);
                            }}>
                            edit
                        </Button>
                    </div>
                </Card>
            ) : (
                <Spinner animation="border" />
            )}
        </div>
    );
};

export default UserDetails;
