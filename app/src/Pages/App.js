import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../components/Global/Container/Container";
import AuthContainer from "../contexts/AuthContainer";
import AppHeader from "./Header/AppHeader";
import AddTodo from "./Todos/AddTodo";
import TodoDetail from "./Todos/Detail/TodoDetail";
import TodosOverview from "./Todos/TodosOverview";
import Home from "./Home/home";
import Footer from "../components/Global/Footer/Footer";
import MakelaarHome from "./Makelaar/MakelaarHome";
import AddPand from "./Makelaar/AddPand";
import Profile from "./Profile/Profile";
import Gegevens from "./Profile/Gegevens";
import Favoieten from "./Profile/Favoieten";
import Huizen from "./Huizen/Huizen";
import Admin from "./Admin/Admin";
import HuizenDetail from "./Huizen/HuizenDetail";

const App = () => {
  return (
    <AuthContainer>
      <AppHeader />
      <Container>
        
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/profile" element={<Gegevens />} />
          <Route path="/profile/favorieten" element={<Favoieten />} />

          <Route path="/makelaar" element={<MakelaarHome />} />
          <Route path="/makelaar/add" element={<AddPand />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="/huizen/" element={<Huizen />} />
          <Route path="/huizen/:id" element={<HuizenDetail />} />

          {/* <Route path="/" element={<TodosOverview />} /> */}
          {/* // <Route path="/todos/:id/*" element={<TodoDetail />} />
          // <Route path="/todos/add" element={<AddTodo />} />
          // <Route path="/" element={<Navigate to="/todos" />} /> */}
        </Routes>
      </Container>
      <Footer />
    </AuthContainer>
  );
};

export default App;
