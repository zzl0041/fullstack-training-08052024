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

  // 🧠 Debounced local filtering
  const debouncedSearch = useCallback(
    debounce((query) => {
      setLoading(true);
      const matches = DATA_LIST.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
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
    setTimeout(() => {
      debouncedSearch.cancel();
      setLoading(false);
      setShowDropdown(false);
      setSuggestions([]);
    }, 100); // Delay ensures click is registered
  };

  // ✅ When user selects a suggestion
  const handleSelect = (value) => {
    setInput(value);
    setSuggestions([]);
    setShowDropdown(false);
  };

  return (
    <div ref={containerRef}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => {
          if (suggestions.length > 0) setShowDropdown(true);
        }}
        onBlur={handleBlur}
        placeholder="Search fruits..."
      />

      {loading && <div>Loading...</div>}

      {showDropdown && suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, idx) => (
            <li key={idx} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
