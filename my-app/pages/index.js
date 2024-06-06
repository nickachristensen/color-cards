import styles from '../styles/Home.module.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

const projects = [
  {
    title: "New York",
    color: "#F06318"
  },
  {
    title: "San Francisco",
    color: "#DCF018"
  },
  {
    title: "San Antonio",
    color: "#18F0E8"
  },
  {
    title: "Nashville",
    color: "#8C0CF0"
  },
  {
    title: "Houston",
    color: "#F0183C"
  },
  {
    title: "New Orleans",
    color: "#F0BA18"
  },
  {
    title: "Oklahoma City",
    color: "#0C34F0"
  },
  {
    title: "Detroit",
    color: "#0CBCF0"
  },
  {
    title: "Indianapolis",
    color: "#91F018"
  }
]

export default function Home() {
  const projectRefs = useRef([]);

  // useEffect(() => {
  //   projectRefs.current = projectRefs.current.slice(0, projects.length);
  // }, []);

  const manageMouseEnter = (index) => {
    gsap.to(projectRefs.current[index], {
      top: "-2vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
      ease: "power1.inOut"
    });
  }

  const manageMouseLeave = (index) => {
    gsap.to(projectRefs.current[index], {
      top: "0",
      backgroundColor: "#FFFFFF",
      duration: 0.3,
      ease: "power1.inOut"
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => projectRefs.current[index] = el}
            onMouseEnter={() => manageMouseEnter(index)}
            onMouseLeave={() => manageMouseLeave(index)}
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
