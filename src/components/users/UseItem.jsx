import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import UserFavarites from "./UserFavarites";

function UseItem({ user }) {
    const navigate = useNavigate();
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.position}</Card.Text>

                    <Card.Text>
                        Expirience
                        {user.exp}
                    </Card.Text>
                    <div className=" d-flex justify-content-between">
                        <Button
                            variant="dark"
                            onClick={() => navigate(`/details/${user.id}`)}>
                            details
                        </Button>

                        <UserFavarites user={user} />
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default UseItem;
