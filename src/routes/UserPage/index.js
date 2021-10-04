import s from "./style.module.css"
import {useSelector} from "react-redux";
import {selectUser} from "../../store/users";
const UserPage =()=>{
    const userInfo = useSelector(selectUser);
return(
        <div >
            <p>{userInfo.data.email}</p>
        </div>
)
};

export default UserPage