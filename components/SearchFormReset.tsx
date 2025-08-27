'use client'

import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        // Reset logic here
        const form = document.querySelector('.search_form') as HTMLFormElement;

        if (form) {
            form.reset();
        }
    }
    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className='search-btn text-white'>
                <X className='size-5' />
                 </Link>

        </button>
    )
}

export default SearchFormReset