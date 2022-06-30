import React, { useEffect } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

function SocialLogin() {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || '/'
   
    useEffect(() => {
        if( googleError){
            toast.error(googleError.message)
        }
    }, [googleError])
    if(googleUser){
        navigate(from,{replace:true})
    }
    if(googleLoading){
        return <Loading/>
    }
  return (

      <div>
      <div className='divider'>OR</div>
      <div className='text-center'>
  
            <button
                className="btn btn-primary mx-auto"
                onClick={() => signInWithGoogle()}
            >Continue with google</button>
      </div>
  </div>
  )
}

export default SocialLogin