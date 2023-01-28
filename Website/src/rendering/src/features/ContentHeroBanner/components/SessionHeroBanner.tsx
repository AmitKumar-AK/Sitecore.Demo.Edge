//import { ContentBannerProps, SessionInformationPageHeroProps } from 'src/types/Common/ContentBanner/contentBannerProps';
import { faCalendar, faClock, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import InfoText from 'components/NonSitecore/InfoText';
import { getSessionDays, getSessionTime } from 'src/helpers/DateHelper';
import { SessionInformationPageHeroProps } from 'src/types/Common/ContentBanner/contentBannerProps';

const SessionHeroBanner = (props: SessionInformationPageHeroProps): JSX.Element => {
  console.log('Here-3');
  const premiumSessionQualificative = props.Premium.value ? 'premium' : '';

  return (
    <section className={`session-information-page-hero ${premiumSessionQualificative}`}>
      <div
        className="background-container"
        style={{
          backgroundImage: 'url(' + props.Image.value?.src + ')',
        }}
      >
        <div className="content">
          <div
            className="image-container bg-cover  bg-center flex-1 min-h-full"
            style={{
              background:
                'linear-gradient(to right, rgba(60, 60, 60, 0) 70%, rgba(0, 0, 0, 1) 100%)',
            }}
          >
          </div>
          <div className="content-container">
            <div className="container-content-text">
              <div>
                  <p className="title">
                    Explore the{' '}
                    <span className="information-type">{premiumSessionQualificative}</span> session:
                  </p>
                  <h1 className="name">
                    {props.Name.value}
                  </h1>
              </div>
              <div>
              {props?.Rooms && (
                  <InfoText Icon={faDoorOpen}>
                    {props?.Rooms[0]?.fields?.Name.value}
                  </InfoText>
                )}                
                <InfoText Icon={faCalendar}>
                  <span>{getSessionDays(props.Day)}</span>
                </InfoText>
                <InfoText Icon={faClock}>
                  <span>{getSessionTime(props.Timeslots)}</span>
                </InfoText>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionHeroBanner;
