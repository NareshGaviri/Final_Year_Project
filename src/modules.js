import HistoryIcon from "@material-ui/icons/History"
import ReportIcon from "@material-ui/icons/Report"
import PeopleIcon from "@material-ui/icons/People"
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp"
import { IoIosPeople } from "react-icons/io";
const modules =[
  {
    text :"Students",
    icon :<PeopleIcon/>,
    moduleName:"students"
  },
  {
    text:"Employees",
    icon :<IoIosPeople size="28px"/>,
    moduleName:"employees"
  },
  {
    text :"Settings",
    icon :<SettingsApplicationsSharpIcon/>,
    moduleName:"settings"
  },
  {
    text : "Reports",
    icon:<ReportIcon/>,
    moduleName:"reports"
  },
  {
    text:"History",
    icon:<HistoryIcon/>,
    moduleName:"history"
  }
]
export default modules