import Button from 'react-bootstrap/Button';
import {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {addNotification, fetchNotifications} from "../reduxSlices/notificationSlice";

export default function StartBuildButton() {
    // const dispatch = useDispatch();
    // let notifications = useSelector((state) => state.notification);
    // console.log(notifications)

    let [state, setState] = useState('')

    const handleClick = () => {
        setState('pending')

        // let repo = {
        //     id: 1,
        //     name: 'test',
        //     url: 'test',
        //     branch: 'test',
        //     username: 'test',
        //     password: 'test',
        //     applicationCode: 'test',
        //     applicationName: 'test',
        // }
        //
        // // dispatch(addNotification(repo))
        // dispatch(fetchNotifications({}))
    }

    return <Button className={'ml-5'} variant="primary" onClick={handleClick}>Starting Build {state}</Button>
}