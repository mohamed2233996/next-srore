import React from 'react';

const SkeletonProductInfo = () => {
    return (
        <div>
            <div className='h-[20px] w-[400px] mb-4 animate-pulse bg-slate-200'></div>
            <div className='h-[20px] w-[400px] mb-4 animate-pulse bg-slate-200'></div>
            <div className='h-[20px] w-[400px] mb-4 animate-pulse bg-slate-200'></div>
            <div className='h-[20px] w-[400px] mb-4 animate-pulse bg-slate-200'></div>
            <div className='h-[20px] w-[400px] mb-4 animate-pulse bg-slate-200'></div>
            <div className='h-[20px] w-[400px] mb-4 animate-pulse bg-slate-200'></div>
            <div className='h-[20px] w-[400px] mb-4 animate-pulse bg-slate-200'></div>
        </div>
    );
}

export default SkeletonProductInfo;
