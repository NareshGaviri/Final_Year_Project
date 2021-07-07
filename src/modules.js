import HistoryIcon from "@material-ui/icons/History";
import ReportIcon from "@material-ui/icons/Report";
import ViewArrayTwoToneIcon from "@material-ui/icons/ViewArrayTwoTone";
import PublishIcon from "@material-ui/icons/Publish";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { IoIosPeople } from "react-icons/io";
const modules = [
  // {
  //   text :"Students",
  //   icon :<PeopleIcon/>,
  //   moduleName:"students"
  // },
  {
    text: "Students",
    icon: <IoIosPeople size="28px" />,
    moduleName: "students",
    link :"/StudentsData"
  },
  {
    text: "View Data",
    icon: <ViewArrayTwoToneIcon />,
    moduleName: "viewdata",
    link: "/data",
  },
  {
    text: "Publish",
    icon: <PublishIcon />,
    moduleName: "publish",
    link: "/publish",
  },

  {
    text:"Registration",
    icon:<AccountBalanceWalletIcon/>,
    moduleName:"registrationFee",
    link:"/registrationFee"
  },
  {
    text:"FeesData",
    icon:<MonetizationOnIcon/>,
    moduleName:"feesData",
    link:"/feesData"
  }
];
export default modules;
