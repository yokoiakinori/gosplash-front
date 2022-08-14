import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/auth/Register";
import { Top } from "./pages/Top";
import { NotFound } from "./pages/NotFound";

export const RouterConfig: React.FC = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route index element={<Top />} />

            {/* 認証 */}
            <Route path="register" element={<Register />} />

            {/* 例外ページ */}
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}