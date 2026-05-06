import { useState } from "react";
import BodyHeader from "./layout/BodyHeader";
import PageHeader from "./layout/PageHeader";

export default function App() {
  const [isDark, setIsDark] = useState(true); // default dark mode

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-dvh overflow-x-hidden bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-white">
        <PageHeader isDark={isDark} toggleDark={() => setIsDark((d) => !d)} />
        <BodyHeader />
      </div>
    </div>
  );
}