export function formatYouTubeTime(seconds : number) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    if (hrs > 0) {
      // Show hours if video is longer than 1 hour
      return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    } else {
      // Otherwise just minutes:seconds
      return `${mins}:${String(secs).padStart(2, "0")}`;
    }
  }
  export function formatYouTubeViews(views : number) {
    if (views < 1000) {
      return `${views} views`;
    } else if (views < 1_000_000) {
      return `${(views / 1000).toFixed(views >= 10000 ? 0 : 1)}K views`;
    } else if (views < 1_000_000_000) {
      return `${(views / 1_000_000).toFixed(views >= 10_000_000 ? 0 : 1)}M views`;
    } else {
      return `${(views / 1_000_000_000).toFixed(views >= 10_000_000_000 ? 0 : 1)}B views`;
    }
  }
  export function formatYouTubePostedAt(date : Date) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);
  
    if (diffSeconds < 60) {
      return "Just now";
    } else if (diffMinutes < 60) {
      return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    } else if (diffDays < 30) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
    } else {
      return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
    }
  }
  
  
  