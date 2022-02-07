import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export function About({ resume }) {
  const getResumeLink = resume.map(res => res);
  const resumeLink = getResumeLink[0];
  console.log(resumeLink);
  
  
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <section id='sobre-mim'>
          <div 
            className={styles.profilePicture} 
          >
            <Image 
              className={styles.profileImage}
              src="/assets/images/avatar.png" 
              alt="Lucas Goulart"
              width={500}
              height={500}
              layout='responsive'
              objectFit='cover'
              
            />
          </div>
            <div>
              <h1 className='sectionTitle'>Sobre Mim</h1>
              <h3>Colombo, Paraná</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ratione porro dolores ipsum, maiores dolor illum cupiditate tenetur rerum nobis temporibus debitis necessitatibus rem explicabo facere veniam, laborum quaerat sint?</p>
              {/* <div className={styles.aboutSocial}>
                ...
              </div> */}
              <div className={styles.aboutButtons}>
                <Link href={resumeLink}>
                  <a target="_blank">
                    <button className={styles.margentaPurpleBorder}>
                      <div className={styles.buttonContent}>
                        <Image 
                          width={24}
                          height={24}
                          src='/assets/icons/download-cloud.svg' alt='Currículo'
                        />
                        <p>Currículo</p>
                      </div>
                    </button>
                  </a>
                </Link>
                <Link href="mailto:lucas@goulartlcs.dev">
                  <a>
                    <button className={styles.purpleCyanBorder}>
                      <div className={styles.buttonContent}>
                        <Image 
                          width={24}
                          height={24}
                          src='/assets/icons/mail.svg' alt='E-mail' 
                        />
                        <p>E-mail</p>
                      </div>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
        </section>
      </div>
    </div>
  );
}