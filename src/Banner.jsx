import GradientBanner from './gradientbanner';

const Banner = ({ children }) => {
  return (
    <GradientBanner colors={['#2f7a00', '#4d90bf', '#2c4c80', '#191506', '#635418']}>
      {children}
    </GradientBanner>
  );
};
export default Banner;