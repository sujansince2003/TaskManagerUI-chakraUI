import { CalendarIcon, EditIcon, AtSignIcon } from "@chakra-ui/icons";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <List spacing={4} color={"white"} fontSize={"1.2em"}>
        <ListItem>
          <NavLink to="/">
            <ListIcon as={CalendarIcon} />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/create">
            <ListIcon as={EditIcon} />
            New Task
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profile">
            <ListIcon as={AtSignIcon} />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </>
  );
}

export default Sidebar;
