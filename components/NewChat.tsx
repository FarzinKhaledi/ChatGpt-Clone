import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

function NewChat() {
  return <div className='border-gray-700 border chatRow'>
    <PlusIcon className="w-4 h-4" />
    <p>New chat</p>
  </div>;
}

export default NewChat;
