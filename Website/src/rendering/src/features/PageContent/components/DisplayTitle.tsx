import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import { DisplayTitleProps } from '../types';

const DisplayTitle = (props: DisplayTitleProps): JSX.Element => (
  
  <section>
    <p className="title">
      <RichText field={{ value: props?.Title }} />
    </p>        
  </section>
);

export default DisplayTitle;
