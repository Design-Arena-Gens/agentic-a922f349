'use client';

import clsx from 'classnames';
import { motion } from 'framer-motion';
import styles from './scene.module.css';

const roadPath = {
  x: ['-12%', '16%', '40%', '64%'],
  y: ['6%', '2%', '-1%', '-3%']
};

const ninoPath = {
  x: ['-18%', '6%', '26%', '46%'],
  y: ['10%', '6%', '2%', '-2%']
};

const treeClasses = [
  styles.tree0,
  styles.tree1,
  styles.tree2,
  styles.tree3,
  styles.tree4,
  styles.tree5
];

export function Scene() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.scene}>
        <div className={styles.sun} />
        <div className={styles.haze} />
        <div className={styles.mist} />
        <div className={styles.mountains}>
          <span className={clsx(styles.mountain, styles.mountainBackLeft)} />
          <span className={clsx(styles.mountain, styles.mountainBackRight)} />
          <span className={clsx(styles.mountain, styles.mountainMid)} />
        </div>
        <div className={styles.treeLine}>
          {treeClasses.map((treeClass, index) => (
            <span key={`tree-${index}`} className={clsx(styles.tree, treeClass)} />
          ))}
        </div>
        <div className={styles.field}>
          <div className={styles.grassBand} />
          <motion.div
            className={styles.grassSway}
            animate={{ backgroundPositionX: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          />
        </div>
        <div className={styles.road}>
          <motion.div
            className={styles.roadDust}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, times: [0, 0.2, 0.4], ease: 'easeOut' }}
          />
        </div>
        <motion.div
          className={clsx(styles.character, styles.jax)}
          animate={{
            x: roadPath.x,
            y: roadPath.y,
            rotateZ: ['-2deg', '-4deg', '-3deg', '-2deg'],
            rotateX: ['1deg', '-1deg', '2deg', '1deg']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className={styles.jeepBody}>
            <div className={styles.jeepCabin}>
              <span className={clsx(styles.eye, styles.eyeLeft)} />
              <span className={clsx(styles.eye, styles.eyeRight)} />
              <div className={styles.grille} />
            </div>
            <div className={styles.jeepFender} />
            <div className={styles.jeepDoor} />
          </div>
          <motion.div
            className={clsx(styles.wheel, styles.frontWheel)}
            animate={{ rotate: [0, 720] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className={clsx(styles.wheel, styles.rearWheel)}
            animate={{ rotate: [0, 720] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className={styles.dustTrail}
            animate={{
              opacity: [0.1, 0.8, 0],
              scale: [0.5, 1.2, 1.6],
              x: ['0%', '-4%', '-12%']
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 0.2,
              ease: 'easeOut'
            }}
          />
        </motion.div>
        <motion.div
          className={clsx(styles.character, styles.nino)}
          animate={{
            x: ninoPath.x,
            y: ninoPath.y,
            rotateZ: ['3deg', '-6deg', '2deg', '0deg']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <div className={styles.robotHead}>
            <span className={styles.robotAntenna} />
            <span className={clsx(styles.robotEye, styles.robotEyeLeft)} />
            <span className={clsx(styles.robotEye, styles.robotEyeRight)} />
            <span className={styles.robotMouth} />
          </div>
          <div className={styles.robotBody}>
            <span className={clsx(styles.robotArm, styles.robotArmLeft)} />
            <span className={clsx(styles.robotArm, styles.robotArmRight)} />
            <span className={styles.robotBag} />
          </div>
          <div className={styles.robotLegs} />
        </motion.div>
        <motion.div
          className={styles.dialogue}
          animate={{
            opacity: [1, 1, 0, 0],
            y: [0, -6, -12, -12]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            times: [0, 0.25, 0.35, 0.4],
            ease: 'easeOut'
          }}
        >
          <p className={styles.speaker}>JAX</p>
          <p className={styles.line}>
            &ldquo;Come on, Nino! If you&apos;re slow, we won&apos;t make it!&rdquo;
          </p>
        </motion.div>
        <motion.div
          className={clsx(styles.dialogue, styles.dialogueNino)}
          animate={{
            opacity: [0, 0, 1, 0],
            y: [0, 8, 0, -10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            times: [0, 0.35, 0.55, 0.7],
            ease: 'easeOut'
          }}
        >
          <p className={styles.speaker}>NINO</p>
          <p className={styles.line}>&ldquo;Wait! This bag is too heavy!&rdquo;</p>
        </motion.div>
        <motion.div
          className={styles.cameraOverlay}
          animate={{
            opacity: [0.12, 0.18, 0.1],
            rotateZ: ['-0.4deg', '0.2deg', '-0.3deg']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </section>
  );
}
