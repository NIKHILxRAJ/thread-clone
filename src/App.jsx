import Header from "./components/common/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  const data = true;

  return (
    <Box minHeight={"100vh"}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={data ? <ProtectedLayout /> : <Navigate to="/register" />}
          >
            <Route index element={<Home />} />
            <Route path="post/:id" element={<Singlepost />} />
            <Route path="search" element={<Search />} />
            <Route path="profile" element={<ProfilLayout />}>
              <Route path="threads/:id" element={<Threads />} />
              <Route path="replies/:id" element={<Replies />} />
              <Route path="reposts/:id" element={<Repost />} />
            </Route>
          </Route>

          <Route 
            path="/register" 
            element={!data ? <Register /> : <Navigate to="/" />} 
          />
          
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;