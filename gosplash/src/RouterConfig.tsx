import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./components/layouts/BaseLayout";
import { Register } from "./pages/auth/Register";
import { Top } from "./pages/Top";
import { NotFound } from "./pages/NotFound";
import { SignIn } from "./pages/auth/SignIn";
import {RecoilRoot} from "recoil";

export const RouterConfig: React.FC = () => {
    return (
        <RecoilRoot>
        <BrowserRouter>
        <Routes>
            <Route element={<BaseLayout />}>
                <Route index element={<Top />} />
            </Route>

            {/* 認証 */}
            <Route path="register" element={<Register />} />
            <Route path="signin" element={<SignIn />} />

            {/* 例外ページ */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
        </RecoilRoot>
    )
}