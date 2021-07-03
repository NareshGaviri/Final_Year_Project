import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { indexMiddleware } from '../../middleware'
import Presentation from  "./Presentation"
import SignIn from "../../../../Authentication/components/Authentication/SignIn"
function Container(props) {
    const {indexMiddleware,collectionData,dataVerifyId} =props
    
    useEffect(()=>{
        if(collectionData){
            var id = collectionData.rollNumber 
            console.log(id)
            indexMiddleware(id)
        }else{
            <SignIn/>
        }
        if(!collectionData){
            return <SignIn/>
        }
    },[])

    return (
        <div>
            <Presentation dataVerifyId={dataVerifyId}/>
        </div>
    )
}

const mapStateToProps =(state)=>{
    console.log(state.authenticate.auth.collectionData)
    console.log("props",state.dataVerifyId.dataVerify.dataVerify)
    return{
        dataVerifyId : state.dataVerifyId.dataVerify.dataVerify,
        collectionData : state.authenticate.auth.collectionData
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        indexMiddleware : (id)=> dispatch(indexMiddleware(id))
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(Container)
