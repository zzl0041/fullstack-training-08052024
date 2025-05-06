import React, { useState, useEffect, useRef, useCallback } from "react";
import debounce from "lodash/debounce";

// 🔧 Static "backend" dataset
const DATA_LIST = [
  "Apple", "Banana", "Orange", "Grapes", "Blueberry", "Strawberry",
  "Avocado", "Mango", "Watermelon", "Pineapple", "Papaya", "Peach"
];

export default function SmartSearch() {
  const [input, setInput] = useState("");           // Input value
  const [suggestions, setSuggestions] = useState([]); // Filtered results
  const [loading, setLoading] = useState(false);    // Loading flag
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
  const containerRef = useRef(null);                // For outside click
  const isSelectingRef = useRef(false);             // Track if user is selecting

  // 🧠 Debounced local filtering
  const debouncedSearch = useCallback(
    debounce((query) => {
      console.log('Searching for:', query);
      setLoading(true);
      const matches = DATA_LIST.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      console.log('Found matches:', matches);
      setSuggestions(matches);
      setShowDropdown(true);
      setLoading(false);
    }, 400),
    [] // ✅ No need to include setState functions
  );

  // 🔁 Trigger search on input change
  useEffect(() => {
    if (input.trim() === "") {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    debouncedSearch(input);

    return () => {
      debouncedSearch.cancel(); // Clean up pending debounce
    };
  }, [input, debouncedSearch]);

  // 🖱️ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✋ Blur handler to clean up
  const handleBlur = () => {
    if (!isSelectingRef.current) {
      setTimeout(() => {
        setShowDropdown(false);
      }, 200);
    }
  };

  // ✅ When user selects a suggestion
  const handleSelect = (value) => {
    console.log('Selected value:', value);
    isSelectingRef.current = true;
    setInput(value);
    setSuggestions([]);
    setShowDropdown(false);
    setTimeout(() => {
      isSelectingRef.current = false;
    }, 200);
  };

  console.log('Current state:', { input, suggestions, showDropdown, loading });

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'relative', 
        width: '300px',
        margin: '20px auto'
      }}
    >
      <input
        value={input}
        onChange={(e) => {
          console.log('Input changed:', e.target.value);
          setInput(e.target.value);
        }}
        onFocus={() => {
          console.log('Input focused');
          if (suggestions.length > 0) setShowDropdown(true);
        }}
        onBlur={handleBlur}
        placeholder="Search fruits..."
        style={{
          width: '100%',
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box'
        }}
      />

      {loading && <div style={{ padding: '8px' }}>Loading...</div>}

      {showDropdown && suggestions.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          margin: 0,
          padding: 0,
          listStyle: 'none',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1000,
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          {suggestions.map((item, idx) => (
            <li 
              key={idx} 
              onClick={() => handleSelect(item)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                borderBottom: idx < suggestions.length - 1 ? '1px solid #eee' : 'none',
                backgroundColor: 'white',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
