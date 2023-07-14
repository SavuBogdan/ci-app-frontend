import StartBuildButton from "../components/StartBuildButton";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


export default function BuildView() {
    let dispatch = useDispatch();
    const { id } = useParams()
    let builds = useSelector(state => state.builds.builds);
    console.log(id)

    useEffect(() => {
        dispatch(fetchBuilds(id)
    }, [dispatch, id])

    return <>
        {}
    </>
};