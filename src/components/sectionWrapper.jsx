import React from 'react';
import styles from '../styles';
import assets from '../assets';
import Button from './button';


const SectionWrapper = ({title, description, reverse,showBtn, mockupImg, banner}) => {
  return (
    <div className={`min-h-screen ${styles.section} 
    ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>

      <div className={`flex items-center 
      ${reverse ? styles.boxReverseClass:styles.boxClass } 
      w-11/12 sm:w-full minmd:w-3/4`}>

        <div className={`${styles.descDiv} 
        ${reverse ? "fadeRightMini":"fadeLeftMini"}
        ${reverse ? styles.textRight:styles.textLeft}`}>

          <h1 
            className={`${styles.h1Text}
            ${reverse ? styles.blackText : styles.whiteText}
            `}
          >
            {title}
          </h1>

          <p className={`
          ${styles.descriptionText}
          ${reverse ? styles.blackText : styles.whiteText}
          `}>
            {description}
          </p>

          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/artifacts/eas/oMzfppg8a9xZUxSLHRWixG.aab"
            />
          )}

        </div>


        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img src={mockupImg} alt="mockup" className={`${styles.sectionImg} ${reverse ? "fadeLeftMini":"fadeRightMini"}`}/>
        </div>
      </div>

      

      

      {/* <img src={mockupImg} alt="mockup"/> */}

    </div>
  )
}

export default SectionWrapper