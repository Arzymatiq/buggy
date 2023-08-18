import React from "react";
import { Route, Routes } from "react-router-dom";
import UserCreate from "./components/users/UserCreate";
import UseEdit from "./components/users/UseEdit";
import UserDetails from "./components/users/UserDetails";
import UsersList from "./components/users/UsersList";
import HomePge from "./components/HomePge";
import FavoritesList from "./components/favorites/FavoritesList";

const MainRout = () => {
    return (
        <Routes>
            <Route path="/create" element={<UserCreate />} />
            <Route path="/edit/:id" element={<UseEdit />} />
            <Route path="/details/:id" element={<UserDetails />} />
            <Route path="/list" element={<UsersList />} />
            <Route path="/" element={<HomePge />} />
            <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
    );
};

export default MainRout;
