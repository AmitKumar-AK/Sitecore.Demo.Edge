import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { DisplayNameProps } from '../types';

const DisplayName = (props: DisplayNameProps): JSX.Element => (
  <section>
    <h1 className="name">
      <Text key="{props?.fields?.Name.value}" field={props?.Name} />
    </h1>    
  </section>
);

export default DisplayName;
