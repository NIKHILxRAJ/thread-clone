import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Procted/Home";
import Search from "./pages/Procted/Search";
import Error from "./pages/Error";
import Register from "./pages/Register";
import { Box } from "@mui/material";
import ProtectedLayout from "./pages/Procted/ProctedLayout";
import ProfilLayout from "./pages/Procted/Profile/ProfileLayout";
import Threads from "./pages/Procted/Profile/Threads";
import Replies from "./pages/Procted/Profile/Replies";
import Repost from "./pages/Procted/Profile/Repost";
import Singlepost from "./pages/Procted/SinglePost";
const App = () => {
  return (
    <>
      <Box minHeight={"100vh"}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProtectedLayout />}>
              <Route exact path="" element={<Home />} />
              <Route exact path="post/:id" element={<Singlepost/>} />
              <Route exact path="search" element={<Search />} />
              <Route exact path="profile" element={<ProfilLayout />}>
                <Route exact path="threads/:id" element={<Threads />} />
                <Route exact path="replies/:id" element={<Replies />} />
                <Route exact path="reposts/:id" element={<Repost />} />
              </Route>
            </Route>
              <Route exact path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default App;
