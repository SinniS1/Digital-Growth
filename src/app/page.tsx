import FeatureSection from './components/FeatureSection/FeatureSection'
import styles from './page.module.css'
export default function Home() {
  return (
    <main className={styles.main}>
      <FeatureSection
        heading={'Building Digital solutions, Fueling Business Growth'}
        headingSize={'3.48vw'}
        para={
          'Empower your business with our custom digital solutions. We specialize in building powerful websites, intuitive apps, and result-driven marketing campaigns to fuel your growth. '
        }
        paraSize={'1.05vw'}
        btn1={'Contact Us'}
        btn1Link={'/contact'}
        btn2={'Our Services'}
        btn2Link={'/service'}
        image={'./HomePageImage.png'}
        isLeftImage={false}
      />
    </main>
  )
}
