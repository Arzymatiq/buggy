import React from "react";

import Card from "react-bootstrap/Card";
import UserFavarites from "../users/UserFavarites";

function FavoriteItem({ favoritesObj }) {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>{favoritesObj.users.name}</Card.Title>
                    <Card.Text>{favoritesObj.users.position}</Card.Text>

                    <Card.Text>
                        Expirience
                        {favoritesObj.users.exp}
                    </Card.Text>

                    <UserFavarites user={favoritesObj.users} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default FavoriteItem;
