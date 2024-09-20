import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <Sharebox>
        <div>
          <img src="/images/user.svg" alt="user" />
          <button>Start a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt="photo" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt="video" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt="event" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="article" />
            <span>Write article</span>
          </button>
        </div>
      </Sharebox>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Sharebox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      justify-content: space-around;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

export default Main;
