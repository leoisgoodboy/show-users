'use client';

import { useState } from 'react';

export default function AddUserButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddUser = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // 重新加载页面以显示新添加的用户
        window.location.reload();
      } else {
        console.error('Failed to add user');
      }
    } catch (error) {
      console.error('Error adding user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleAddUser}
      disabled={isLoading}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300"
    >
      {isLoading ? '添加中...' : '添加随机用户'}
    </button>
  );
}
