import { Outlet } from "react-router-dom";
import GamesHeader from "../components/GamesHeader";

export default function GamesLayout() {
  return (
    <>
    <GamesHeader />
    <Outlet />
    </>
  )
}