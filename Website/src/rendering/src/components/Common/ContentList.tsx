import Link from 'next/link';
import { RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import Image from 'next/image';
import { ListResults } from 'src/interfaces/schema';

const ContentListItem = (item: any): JSX.Element => {
  const featuredCssClass = item?.Featured?.value ? 'featured' : '';

  const description = item?.description && (
      <RichText tag="span" field={item?.description} />
  );
  return (
    <div className={`information-block ${featuredCssClass}`}>
      <div className="info-col-left">
        <Image
          src={item?.picture?.jsonValue?.value?.src}
          width={265}
          height={265}
          alt={item?.picture?.jsonValue?.value?.alt}
          title={item?.picture?.jsonValue?.value?.alt}
        />        
      </div>
      <div className="info-col-content">
        <strong className="info-col-title">{item?.displayName}</strong> <br/>
        <br/>
        {description}
        <div className="info-col-cta">
          <Link href={item?.url?.path}>
            <a className="btn-main">Learn more</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ContentList = (props: ListResults): JSX.Element => {
  const items = props.data.item.children.results && props.data.item.children.results.length > 0 && (
    <div className="speaker-list">
      {props.data.item.children.results.map((item, index) => (
        <ContentListItem {...item} key={index} />
      ))}
    </div>
  );

  return <>{items}</>;
};

export default ContentList;
