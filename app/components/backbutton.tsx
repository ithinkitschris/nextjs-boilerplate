'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();
    const goBack = () => {
        router.back();
    };

    return (
        <button onClick={goBack} className="text-base text-foreground"> 
        Take me back!
        </button>
    );
};

export default BackButton;