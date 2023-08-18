import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getToFavorites } from "../../store/userSlice";
import FavoriteItem from "./FavoriteItem";

const FavoritesList = () => {
    const { favorites } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToFavorites());
    }, []);
    console.log(favorites);

    return (
        <>
            {favorites.length ? (
                <div className="w-100 d-flex  justify-content-evenly align-items-center mt-5">
                    {favorites.map((favoritesObj) => (
                        <FavoriteItem
                            key={favoritesObj.id}
                            favoritesObj={favoritesObj}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    error
                </div>
            )}
        </>
    );
};

export default FavoritesList;
