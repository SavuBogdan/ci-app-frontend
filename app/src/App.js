import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RepositoryListView from "./views/RepositoryListView";
import BuildView from "./views/BuildView";
import React from "react";
import './assets/css/main.css'
import {useDispatch} from "react-redux";
import {fetchRepositories} from "./reduxSlices/repositorySlice";


function App() {
    let dispatch = useDispatch();
    dispatch(fetchRepositories({}))

    return (
        <body>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RepositoryListView/>}/>
                    <Route path="/repositories/:id/builds" element={<BuildView/>}/>
                </Routes>
            </BrowserRouter>
        </body>

    );
}

export default App;
