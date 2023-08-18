import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../../store/userSlice";

const UserFavarites = ({ user }) => {
    const dispatch = useDispatch();

    return (
        <div>
            {user.favorites ? (
                <Button
                    variant="dark"
                    onClick={() =>
                        dispatch(addToFavorites({ ...user, favorites: false }))
                    }>
                    <img
                        src="https://static-00.iconduck.com/assets.00/white-heart-emoji-2048x2008-1l7jbme4.png"
                        alt=""
                        width="20px"
                        height="20px"
                    />
                </Button>
            ) : (
                <Button
                    variant="dark"
                    onClick={() =>
                        dispatch(addToFavorites({ ...user, favorites: true }))
                    }>
                    <img
                        src="https://icon-library.com/images/white-heart-icon/white-heart-icon-23.jpg"
                        alt=""
                        width="25px"
                        height="25px"
                    />
                </Button>
            )}
        </div>
    );
};

export default UserFavarites;
