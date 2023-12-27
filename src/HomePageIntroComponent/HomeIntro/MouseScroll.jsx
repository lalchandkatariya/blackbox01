import React, { useState, useEffect } from "react";

export default function ScrollTransition() {
  const [scrollTop, setScrollTop] = useState(0);

  const [content, setContent] = useState("Initial content");

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrollTop(scrollTop);

      if (scrollTop < 200) {
        setContent("First section content");
      } else if (scrollTop >= 300 && scrollTop < 400) {
        setContent("Second section content");
      } else {
        setContent("Third section content");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // rest of component

  return <div>{content}</div>;
}
