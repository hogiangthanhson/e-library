import './SearchBar.scss';
import { ReactComponent as Search } from 'assets/images/fi_search.svg';
import React, { useRef, useState } from 'react';

export function SearchBar(props: any) {
  const [searchTerm, setSearchTerm] = useState('');
  const { onSubmit } = props;
  const typingTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setSearchTerm(value);

    //debounce
    if (!onSubmit) return;
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = { searchTerm: value };
      onSubmit(formValue);
    }, 500);
  };

  return (
    <form className="search">
      <Search className="search-icon" />
      <input
        className="search-input note"
        type="text"
        placeholder="Tìm kết quả theo tên, lớp, môn học,...."
        onChange={handleSearchChange}
        value={searchTerm}
      />
    </form>
  );
}
