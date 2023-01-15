import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Prescripted from "layouts/Prescripted";
import Samples from "layouts/samples";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Reports from "layouts/Reports";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Verify from "layouts/authentication/verify-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Pharmacies from "layouts/Pharmacies";
import Labs from "layouts/Labs";
import EditProfile from "layouts/EditProfile";
import AddForm from "layouts/AddForm";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    margin: false,
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Appointments",
    key: "appointments",
    margin: false,
    icon: <Icon fontSize="small">receipt</Icon>,
    route: "/appointments",
    component: <Labs />,
  },
  {
    type: "collapse",
    name: "Upload Prescription",
    key: "upload",
    margin: false,
    icon: <Icon fontSize="small">Cart</Icon>,
    route: "/cart",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Edit Profile",
    margin: false,
    key: "edit_profile",
    icon: <Icon fontSize="small">Edit</Icon>,
    route: "/edit_profile",
    component: <EditProfile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    margin: false,
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    margin: false,
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Verify User",
    margin: false,
    key: "verify-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/verify",
    component: <Verify />,
  },
];

export default routes;
