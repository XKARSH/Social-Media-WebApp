import { useEffect } from "react";
import Header from "../components/header";
import Timeline from "../components/timeline";
import Recommend from "../components/recommend";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <div className='bg-gray-background'>
      <Header />
      <div>
        <Timeline />
        <Recommend />
      </div>
    </div>
  );
}
