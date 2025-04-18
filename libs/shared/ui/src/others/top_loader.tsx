import LoadingBar, { IProps } from 'react-top-loading-bar';

interface TopLoaderProps extends IProps {}

const TopLoader = (props: TopLoaderProps) => {
  return <LoadingBar {...props} />;
};

export default TopLoader;
