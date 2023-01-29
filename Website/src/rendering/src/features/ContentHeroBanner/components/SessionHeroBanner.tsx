import { faCalendar, faClock, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import InfoText from 'components/NonSitecore/InfoText';
import { getSessionDays, getSessionTime } from 'src/helpers/DateHelper';
import { InformationPageHeroProps } from 'src/types/Common/ContentBanner/contentBannerProps';
import { Text } from '@sitecore-jss/sitecore-jss-nextjs';
import DisplayName from 'src/features/PageContent/components/DisplayName';
import DisplayTitle from 'src/features/PageContent/components/DisplayTitle';

const SessionHeroBanner = (props: InformationPageHeroProps): JSX.Element => {
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
                  <DisplayTitle Title={"Explore the <span className='information-type'>" + premiumSessionQualificative + "</span> session:  "} />
                  <DisplayName Name={props.Name} />
              </div>
              <div>
                {/* Dispaly Multiple Rooms*/}
                {props?.Rooms && (
                  <InfoText Icon={faDoorOpen}>
                    {props?.Rooms.map((roomDetails, index) => (
                        <Text style={{marginRight: 1 + 'em'}} key={index} tag="span" field={roomDetails?.fields?.Name} />
                        ))}                    
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
