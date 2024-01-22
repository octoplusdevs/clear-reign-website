'use client'
import { Header } from "@/components/header";
import { Headline } from "@/components/headline";
import { useEffect, useState } from "react";

export default function Home() {
  const [hideElements, setHideElements] = useState(false)

  const handleScrollPage = (e: WheelEvent) => {
    if (e.deltaY < 0) {
     return setHideElements(false)
    }      
    setHideElements(true)
  };

  const toggleBackground = () => {
    if(hideElements){
      return  document.body.classList.add('active')
    }
    document.body.classList.remove('active')
  }

  useEffect(() => {
    window.document.addEventListener('wheel',(e)=> handleScrollPage(e));
    toggleBackground()

    return () => {
      window.document.removeEventListener('wheel', handleScrollPage);
    };
  }, [hideElements]);

  return (
    <main>
      <Header visible={hideElements}/>
      <Headline visible={hideElements}/>
    </main>
  );
}
