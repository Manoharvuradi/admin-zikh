import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { api } from '~/utils/api';

const CrimeList = () => {
    const { isLoading, data, error } = api.crimeTip.list.useQuery();
    const router = useRouter();
    useEffect(() => {

    }, [data]);
    const handleCardClick = (id: number) => {
        router.push(`/crime/${id}/show`);
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                {data?.map((data, index) => (
                    <div key={index} className="w-[50%] mx-4 my-4"> {/* Adjust the width as needed */}
                        <div className="bg-white border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 cursor-pointer hover:bg-gray-100" onClick={() => handleCardClick(data.id)}>
                            <div className="p-6">
                                <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{data.location}</h5>
                                <p className='mb-3 text-md text-gray-700 dark:text-gray-400'>{data.city}</p>
                                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{data.addtionalInfo.length > 50 ? data.addtionalInfo.slice(0, 50) + "..." : data.addtionalInfo}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>

    )
}

export default CrimeList;