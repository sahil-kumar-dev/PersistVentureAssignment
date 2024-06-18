import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="space-y-4">
                <div className="space-y-2">
                    <Skeleton className='h-64 w-full' />
                    <div className="flex items-center text-xs">
                        <Skeleton />
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold dark:text-violet-600">
                        <Skeleton count={2} />
                    </h3>
                    <p className="leading-snug dark:text-gray-600">
                        <Skeleton count={3} />
                    </p>
                </div>
            </div>
        </div>
    )
}

const LoadingSkeleton = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto max-w-7xl gap-6'>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
        </div>
    )
}

export default LoadingSkeleton