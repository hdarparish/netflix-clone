export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.75 },
    },
  },
};

export const breakpoints = {
  100: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  386: {
    slidesPerView: 1.5,
    slidesPerGroup: 1,
  },
  500: {
    slidesPerView: 2,
    slidesPerGroup: 1,
  },
  640: {
    slidesPerView: 2.5,
    slidesPerGroup: 2,
  },
  830: {
    slidesPerView: 3,
    slidesPerGroup: 2,
  },
  960: {
    slidesPerView: 3.5,
    slidesPerGroup: 3,
  },
  1024: {
    slidesPerView: 6,
    slidesPerGroup: 5,
  },
};
