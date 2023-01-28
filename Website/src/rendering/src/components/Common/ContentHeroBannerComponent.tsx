import { ComponentProps } from 'lib/component-props';
import ContentHeroBanner from 'src/features/ContentHeroBanner/components/ContentHeroBanner';
import { BannerProps } from 'src/types/Common/ContentBanner/contentBannerProps';
export type ContentHeroBannerProps = ComponentProps & {
    fields: BannerProps
  };

const ContentHeroBannerComponent = (props: ContentHeroBannerProps): JSX.Element => {
  console.log('Here-1');
  return (
    <div>

      <ContentHeroBanner key={props.fields.Name.value} {...props.fields} />
    </div>
  );
};

export default ContentHeroBannerComponent;
