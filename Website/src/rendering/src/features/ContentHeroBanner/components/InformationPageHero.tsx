import { Field, ImageField, LayoutServicePageState, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import SocialIcon from 'components/NonSitecore/SocialIcon';
import { SpeakerInformationPageHeroProps } from 'src/types/Common/ContentBanner/contentBannerProps';

export type InformationPageHeroProps = ComponentProps & {
  fields: {
    Name: Field<string>;
    Image: ImageField;
    FacebookProfileLink?: Field<string>;
    TwitterProfileLink?: Field<string>;
    InstagramProfileLink?: Field<string>;
    LinkedinProfileLink?: Field<string>;
  };
  type: string;
  qualificative: string;
  informations?: JSX.Element;
};

const InformationPageHero = (props: SpeakerInformationPageHeroProps): JSX.Element => {
  console.log('Here-2');
  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext.pageState === LayoutServicePageState.Edit;
  const lowerCaseQualificative = props?.Featured?.value ? 'featured' : '';


  const informations =
    props.JobTitle?.value ||
    props.Company?.value ||
    props.Location?.value ||
    isPageEditing ? (
      <>
        {props.JobTitle?.value || isPageEditing ? (
          <div>
            <span className="label">Job Title:</span>{' '}
            <Text field={props.JobTitle} tag="span" />
          </div>
        ) : undefined}
        {props.Company?.value || isPageEditing ? (
          <div>
            <span className="label">Company:</span> <Text field={props.Company} tag="span" />
          </div>
        ) : undefined}
        {props.Location?.value || isPageEditing ? (
          <div>
            <span className="label">Location:</span>{' '}
            <Text field={props.Location} tag="span" />
          </div>
        ) : undefined}
      </>
    ) : undefined;  

    const informationsHTML = informations ? (
      <div className="informations">{informations}</div>
    ) : undefined;

  return (
        <section
        className={`information-page-hero ${props.TemplateName.toLocaleLowerCase()}-information-page-hero ${lowerCaseQualificative}`}
        >
        <div className="content">
          <div className="image-container">
            {/* Purposefully not using a JSS Image component here to avoid width/height HTML attributes on the img tag */}
            <img src={props.Picture.value?.src} alt="Image" loading="lazy" />
          </div>
          <div className="gradient-container"></div>
          <div className="content-container">
            <div className={`container-content-text`}>
              <div>
                <p className="title">
                  Meet the <span className="information-type">{lowerCaseQualificative}</span>{' '}
                  {props.TemplateName}:
                </p>
                <h1 className="name">
                  <Text field={props.Name} />
                </h1>
              </div>
              {informationsHTML}
              <div className="external-website-icons">
                <SocialIcon Icon={faFacebookF} Link={props.FacebookProfileLink} />
                <SocialIcon Icon={faTwitter} Link={props.TwitterProfileLink} />
                <SocialIcon Icon={faLinkedinIn} Link={props.LinkedinProfileLink} />
                <SocialIcon Icon={faInstagram} Link={props.InstagramProfileLink} />
              </div>
            </div>
          </div>
        </div>
        </section>
    );
};

export default InformationPageHero;
