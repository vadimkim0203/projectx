// 'use client';

// import { activateUser } from '@/app/lib/actions/authActions'
import React from 'react'

interface Props {
    params: {
        id: string,
    }
}
const ActivationPage = async ({params}: Props) => {
    // const result = await activateUser(params.id);
    const result = null;

    // const [result, setResult] = useState(null);

    // useEffect(() => {
    //     const fetchProductData = async () => {
    //         try {
    //           await axios.post(`http://localhost:8000/api/users/verify/${userId}`, {}).then(function (response) {
    //             console.log('done', response.data)
    //             setResult(response.data)
    //           })
    //         } catch (error) {
    //           console.error('Error', error);
    //         }
            
    //     }
      
    //     fetchProductData();
    // }, [])

    return (
        <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 flex items-center justify-center">
            {result === 'userNotExist' ? (
                <div>
                    The user does not exist
                </div>
            ) : result === 'alreadyActivated' ? (
                <div>
                    The user already activated
                </div>
            ) : result === 'success' ? (
                <div>
                    The user is now activated
                </div>
            ) : (
                <div>
                    Something went wrong
                </div>
            )}
        </div>
    )
}

export default ActivationPage