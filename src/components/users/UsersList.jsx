import React from "react";
import { useEffect } from "react";
import UseItem from "./UseItem";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import { Container, Spinner } from "react-bootstrap";

const UsersList = () => {
    const { users, error, loading } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, []);
    return (
        <div>
            {error ? (
                <div>
                    <h3>Someting went Wrong</h3> <h4> {error}</h4>
                </div>
            ) : (
                <ul
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        marginTop: "50px",
                    }}>
                    <div className="w-100 d-flex  justify-content-center ">
                        {loading && <Spinner animation="border" />}
                    </div>

                    {users.map((user) => (
                        <UseItem key={user.id} user={user} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UsersList;
