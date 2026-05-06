type DataProps = {
  btns: string[];
  selected: string;
  onSelect: (text: string) => void;
};

import Button from "./Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function CategoryPills(props: DataProps) {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateVisibility = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setIsLeftVisible(scrollLeft > 2);
    setIsRightVisible(scrollLeft < scrollWidth - clientWidth - 2);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateVisibility);
    const observer = new ResizeObserver(updateVisibility);
    observer.observe(el);
    updateVisibility();
    return () => {
      el.removeEventListener("scroll", updateVisibility);
      observer.disconnect();
    };
  }, [props.btns]);
  
  const scrollRight = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ 
      left: containerRef.current.clientWidth * 0.6, 
      behavior: "smooth" 
    });
  };
  
  const scrollLeft = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ 
      left: -containerRef.current.clientWidth * 0.6, 
      behavior: "smooth" 
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hidden scrollbar but actually scrollable — so scrollWidth works perfectly */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto px-2 md:px-8 scroll-smooth [&::-webkit-scrollbar]:hidden" 
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {props.btns.map((ele, id) => (
          <Button
            key={id}
            variant={props.selected === ele ? "ytbtn" : "default"}
            className="px-3.5 py-1.5 rounded-lg shrink-0"
            onClick={() => props.onSelect(ele)}
          >
            <span>{ele}</span>
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-14 h-full items-center justify-start">
          <Button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full bg-white dark:bg-[#0f0f0f] shadow-md flex items-center justify-center"
          >
            <ChevronLeft size={18} />
            </Button>
            </div>
          )}
          {isRightVisible && (
            <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-14 h-full items-center justify-end">
              <Button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white dark:bg-[#0f0f0f] shadow-md flex items-center justify-center"
              >
                <ChevronRight size={18} />
                </Button>
                </div>
              )}
              </div>
        );
}