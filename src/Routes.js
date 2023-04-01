import React from "react";
// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Attendance from "./Pages/Attendance";
// Pages
import Dashboard from "./Pages/Dashboard";
import Employee from "./Pages/Employee";
import Leave from "./Pages/Leave";
import Project from "./Pages/Project";
import Task from "./Pages/Task";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Main>
          <Routes>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Project />} path="/project" />
            <Route element={<Task />} path="/task" />
            <Route element={<Attendance />} path="/attendance" />
            <Route element={<Employee />} path="/employee" />
            <Route element={<Leave />} path="/leave" />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  );
};

export default Routing;
