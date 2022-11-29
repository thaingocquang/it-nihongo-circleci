import React from "react";
import { Routes, Route } from "react-router-dom";

import GuestRoute from "./guest-route"
import AuthenticatedRoute from "./authenticated-route"
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";
import { Home } from "../pages/home";
import { PostApproval } from "../pages/PostApproval";
import Profile from "../pages/profile";
import { Store } from "../pages/store";

function AllRoutes() {
    return (
        <Routes>
            <Route element={<GuestRoute />}>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Route>
            <Route
                element={<AuthenticatedRoute/>}
            >
                <Route path="" element={<Home />} />
                <Route path="/post-approval" element={<PostApproval />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/store" element={<Store />} />
            </Route>
        </Routes>
    );
}
export default AllRoutes;
